import Script from 'next/script';

type StructuredDataProps = {
    locale: string;
};

export default function StructuredData({ locale }: StructuredDataProps) {
    const organizationData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "IKHWA INVESTMENTS",
        "alternateName": locale === 'ar' ? "استثمارات إخوة" : "IKHWA INVESTMENTS",
        "url": "https://www.ikhwainvestments.com",
        "logo": "https://www.ikhwainvestments.com/logo.png",
        "description": locale === 'ar'
            ? "شركة إخوة للإستثمارات - شركة مغربية متخصصة في إنشاء الشركات ومساعدة المستثمرين"
            : "IKHWA INVESTMENTS - A Moroccan company specializing in company formation and investor support",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Meknes",
            "addressRegion": "Meknes-Fes",
            "addressCountry": "MA"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["ar", "en", "fr"]
        },
        "sameAs": [
            "https://www.facebook.com/ikhwainvestment",
            "https://www.instagram.com/ikhwainvestments",
            "https://x.com/ikhwainvestment",
            "https://www.linkedin.com/showcase/ikhwainvestments",
            "https://t.me/ikhwainvestments",
            "https://www.youtube.com/@ikhwainvestments"
        ]
    };

    const localBusinessData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "IKHWA INVESTMENTS",
        "image": "https://www.ikhwainvestments.com/logo.png",
        "url": "https://www.ikhwainvestments.com",
        "telephone": "+212-XXX-XXXXXX",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Meknes",
            "addressLocality": "Meknes",
            "addressRegion": "Meknes-Fes",
            "postalCode": "50000",
            "addressCountry": "MA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 33.8935,
            "longitude": -5.5473
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        }
    };

    const servicesData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": locale === 'ar' ? "خدمات إنشاء الشركات" : "Company Formation Services",
        "provider": {
            "@type": "Organization",
            "name": "IKHWA INVESTMENTS"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Morocco"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": locale === 'ar' ? "خدمات الأعمال" : "Business Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": locale === 'ar' ? "دراسات الجدوى للمشاريع الاستثمارية" : "Feasibility Studies for Investment Projects"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": locale === 'ar' ? "الإشراف المحاسبي للشركات" : "Accounting Supervision for Companies"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": locale === 'ar' ? "مواكبة التمويل البنكي" : "Banking Finance Support"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": locale === 'ar' ? "توفير الفرص الاستثمارية" : "Investment Opportunities"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": locale === 'ar' ? "تأسيس شركة محدودة" : "Limited Company Establishment"
                    }
                }
            ]
        }
    };

    const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": locale === 'ar' ? "الرئيسية" : "Home",
                "item": `https://www.ikhwainvestments.com/${locale}`
            }
        ]
    };

    return (
        <>
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationData)
                }}
            />
            <Script
                id="local-business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessData)
                }}
            />
            <Script
                id="services-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(servicesData)
                }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbData)
                }}
            />
        </>
    );
}
