import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import LocaleProvider from '../../components/LocaleProvider';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Home/Footer";
import StructuredData from "@/components/StructuredData";
import FontPreloader from "@/components/FontPreloader";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    ar: "استثمارات إخوة | شريكك الموثوق للاستثمار في المغرب",
    en: "IKHWA INVESTMENTS | Your Trusted Partner for Investment in Morocco",
    fr: "IKHWA INVESTMENTS | Votre Partenaire de Confiance pour l'Investissement au Maroc"
  };

  const descriptions: Record<string, string> = {
    ar: "شركة إخوة للإستثمارات - شركة مغربية متخصصة في إنشاء الشركات ومساعدة المستثمرين المغاربة والأجانب في إنطلاق مشاريعهم بالمغرب مع استراتيجيات مناسبة لأهدافهم المالية والاستثمارية",
    en: "IKHWA INVESTMENTS - A Moroccan company specializing in company formation and helping Moroccan and foreign investors launch their projects in Morocco with strategies tailored to their financial and investment objectives",
    fr: "IKHWA INVESTMENTS - Une entreprise marocaine spécialisée dans la création d'entreprises et aidant les investisseurs marocains et étrangers à lancer leurs projets au Maroc avec des stratégies adaptées à leurs objectifs financiers et d'investissement"
  };

  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;

  return {
    title: {
      default: title,
      template: `%s | ${locale === 'ar' ? 'استثمارات إخوة' : 'IKHWA INVESTMENTS'}`
    },
    description,
    keywords: [
      locale === 'ar' ? 'استثمار المغرب' : 'Morocco investment',
      locale === 'ar' ? 'إنشاء شركات' : 'company formation',
      locale === 'ar' ? 'مكناس' : 'Meknes',
      locale === 'ar' ? 'استثمارات إخوة' : 'IKHWA INVESTMENTS',
      locale === 'ar' ? 'دراسات الجدوى' : 'feasibility studies',
      locale === 'ar' ? 'الاستثمار الأجنبي' : 'foreign investment',
      locale === 'ar' ? 'تأسيس شركة في المغرب' : 'establish company in Morocco',
    ],
    authors: [{ name: 'IKHWA INVESTMENTS' }],
    creator: 'IKHWA INVESTMENTS',
    publisher: 'IKHWA INVESTMENTS',
    metadataBase: new URL('https://www.ikhwainvestments.com'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ar: '/ar',
        en: '/en',
        fr: '/fr',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: `https://www.ikhwainvestments.com/${locale}`,
      title: title,
      description: description,
      siteName: 'IKHWA INVESTMENTS',
      images: [
        {
          url: '/logo.png',
          width: 1200,
          height: 630,
          alt: 'IKHWA INVESTMENTS Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: ['/logo.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'google-site-verification-code',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <LocaleProvider locale={locale}>
      <NextIntlClientProvider messages={messages}>
        <FontPreloader locale={locale} />
        <StructuredData locale={locale} />
        <Navbar />
        {children}
        <Footer />
      </NextIntlClientProvider>
    </LocaleProvider>
  );
}