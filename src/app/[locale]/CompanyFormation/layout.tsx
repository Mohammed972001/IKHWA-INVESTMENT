import type { Metadata } from "next";

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;

    const titles: Record<string, string> = {
        ar: "إنشاء شركات في المغرب | استثمارات إخوة",
        en: "Company Formation in Morocco | IKHWA INVESTMENTS",
        fr: "Création d'Entreprise au Maroc | IKHWA INVESTMENTS"
    };

    const descriptions: Record<string, string> = {
        ar: "نقدم خدمات متكاملة لإنشاء الشركات في المغرب - تأسيس شركات محدودة، دراسات الجدوى، الإشراف المحاسبي، ومواكبة التمويل البنكي. شريكك الموثوق لإنطلاق مشروعك في المملكة المغربية",
        en: "We provide comprehensive company formation services in Morocco - Limited company establishment, feasibility studies, accounting supervision, and banking support. Your trusted partner for launching your project in Morocco",
        fr: "Nous proposons des services complets de création d'entreprise au Maroc - Établissement de société à responsabilité limitée, études de faisabilité, supervision comptable et soutien bancaire. Votre partenaire de confiance pour lancer votre projet au Maroc"
    };

    const title = titles[locale] || titles.en;
    const description = descriptions[locale] || descriptions.en;

    return {
        title,
        description,
        keywords: [
            locale === 'ar' ? 'إنشاء شركة في المغرب' : 'company formation Morocco',
            locale === 'ar' ? 'تأسيس شركة محدودة' : 'limited company establishment',
            locale === 'ar' ? 'دراسة الجدوى' : 'feasibility study',
            locale === 'ar' ? 'الإشراف المحاسبي' : 'accounting supervision',
            locale === 'ar' ? 'تمويل بنكي' : 'bank financing',
            locale === 'ar' ? 'استثمار أجنبي المغرب' : 'foreign investment Morocco',
            locale === 'ar' ? 'فرص استثمارية المغرب' : 'investment opportunities Morocco',
        ],
        alternates: {
            canonical: `/${locale}/CompanyFormation`,
            languages: {
                ar: '/ar/CompanyFormation',
                en: '/en/CompanyFormation',
                fr: '/fr/CompanyFormation',
            },
        },
        openGraph: {
            type: 'website',
            locale: locale,
            url: `https://www.ikhwainvestments.com/${locale}/CompanyFormation`,
            title: title,
            description: description,
            siteName: 'IKHWA INVESTMENTS',
            images: [
                {
                    url: '/logo.png',
                    width: 1200,
                    height: 630,
                    alt: 'IKHWA INVESTMENTS - Company Formation Services',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: description,
            images: ['/logo.png'],
        },
    };
}

export default function CompanyFormationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
