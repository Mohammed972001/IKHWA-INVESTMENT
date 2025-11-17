'use client';

import { useTranslations } from 'next-intl';
import { getFontStyles } from '@/utils/fonts';
import { useDetectedLocale } from '@/hooks/useDetectedLocale';

export default function PrivacyPage() {
    const t = useTranslations('Privacy');
    const locale = useDetectedLocale();

    const sections = [
        'commitment',
        'definitions',
        'ourCommitment',
        'dataCollection',
        'cookies',
        'dataUsage',
        'consent',
        'noData',
        'dataSharing',
        'dataTransfer',
        'dataProtection',
        'dataRetention',
        'yourRights',
        'complaints',
        'yourRole',
        'updates'
    ];

    return (
        <div className="mt-20 bg-white text-black min-h-screen">
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Header Section */}
                <div className="mb-12 text-center">
                    <h1
                        className="text-[32px] leading-[38px] lg:text-[32px] lg:leading-[38px] md:text-[28px] md:leading-[34px] sm:text-[24px] sm:leading-[30px] font-medium text-gray-800 mb-6"
                        style={getFontStyles(locale)}
                    >
                        {t('hero.title')}
                    </h1>
                    <div className="max-w-4xl mx-auto">
                        <p
                            className="text-[18px] leading-[27px] lg:text-[18px] lg:leading-[27px] md:text-[16px] md:leading-[24px] sm:text-[14px] sm:leading-[21px] font-normal text-gray-800"
                            style={getFontStyles(locale)}
                        >
                            {t('hero.description')}
                        </p>
                    </div>
                </div>

                {/* Privacy Content */}
                <div className="space-y-8">
                    {sections.map((sectionKey, index) => (
                        <div key={index}>
                            <h2
                                className="text-[18px] leading-[27px] lg:text-[18px] lg:leading-[27px] md:text-[16px] md:leading-[24px] sm:text-[15px] sm:leading-[22px] font-semibold text-gray-800 mb-4"
                                style={getFontStyles(locale)}
                            >
                                {t(`sections.${sectionKey}.title`)}
                            </h2>

                            {sectionKey === 'definitions' ? (
                                <div className="space-y-4">
                                    <div>
                                        <h3
                                            className="text-[16px] leading-[26px] font-semibold text-gray-700 mb-2"
                                            style={getFontStyles(locale)}
                                        >
                                            {t('sections.definitions.company.title')}
                                        </h3>
                                        <div
                                            className="text-[16px] leading-[26px] lg:text-[16px] lg:leading-[26px] md:text-[14px] md:leading-[22px] sm:text-[13px] sm:leading-[20px] font-medium text-black"
                                            style={getFontStyles(locale)}
                                        >
                                            {t('sections.definitions.company.content')}
                                        </div>
                                    </div>
                                    <div>
                                        <h3
                                            className="text-[16px] leading-[26px] font-semibold text-gray-700 mb-2"
                                            style={getFontStyles(locale)}
                                        >
                                            {t('sections.definitions.customer.title')}
                                        </h3>
                                        <div
                                            className="text-[16px] leading-[26px] lg:text-[16px] lg:leading-[26px] md:text-[14px] md:leading-[22px] sm:text-[13px] sm:leading-[20px] font-medium text-black"
                                            style={getFontStyles(locale)}
                                        >
                                            {t('sections.definitions.customer.content')}
                                        </div>
                                    </div>
                                    <div>
                                        <h3
                                            className="text-[16px] leading-[26px] font-semibold text-gray-700 mb-2"
                                            style={getFontStyles(locale)}
                                        >
                                            {t('sections.definitions.personalInfo.title')}
                                        </h3>
                                        <div
                                            className="text-[16px] leading-[26px] lg:text-[16px] lg:leading-[26px] md:text-[14px] md:leading-[22px] sm:text-[13px] sm:leading-[20px] font-medium text-black"
                                            style={getFontStyles(locale)}
                                        >
                                            {t('sections.definitions.personalInfo.content')}
                                        </div>
                                    </div>
                                </div>
                            ) : sectionKey === 'dataCollection' ? (
                                <>
                                    <div
                                        className="text-[16px] leading-[26px] lg:text-[16px] lg:leading-[26px] md:text-[14px] md:leading-[22px] sm:text-[13px] sm:leading-[20px] font-medium text-black mb-4"
                                        style={getFontStyles(locale)}
                                    >
                                        {t('sections.dataCollection.intro')}
                                    </div>
                                    <ul className="list-disc list-inside space-y-2 text-black mb-4">
                                        {t.raw('sections.dataCollection.items').map((item: string, idx: number) => (
                                            <li
                                                key={idx}
                                                className="text-[16px] leading-[26px] lg:text-[16px] lg:leading-[26px] md:text-[14px] md:leading-[22px] sm:text-[13px] sm:leading-[20px] font-medium"
                                                style={getFontStyles(locale)}
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div
                                        className="text-[16px] leading-[26px] lg:text-[16px] lg:leading-[26px] md:text-[14px] md:leading-[22px] sm:text-[13px] sm:leading-[20px] font-medium text-black mb-4"
                                        style={getFontStyles(locale)}
                                    >
                                        {t('sections.dataCollection.additional')}
                                    </div>
                                    <ul className="list-disc list-inside space-y-2 text-black">
                                        {t.raw('sections.dataCollection.employmentItems').map((item: string, idx: number) => (
                                            <li
                                                key={idx}
                                                className="text-[16px] leading-[26px] lg:text-[16px] lg:leading-[26px] md:text-[14px] md:leading-[22px] sm:text-[13px] sm:leading-[20px] font-medium"
                                                style={getFontStyles(locale)}
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (sectionKey === 'dataUsage' || sectionKey === 'yourRights') ? (
                                <>
                                    <div
                                        className="text-[16px] leading-[26px] lg:text-[16px] lg:leading-[26px] md:text-[14px] md:leading-[22px] sm:text-[13px] sm:leading-[20px] font-medium text-black mb-4"
                                        style={getFontStyles(locale)}
                                    >
                                        {t(`sections.${sectionKey}.intro`)}
                                    </div>
                                    <ul className="list-disc list-inside space-y-2 text-black">
                                        {t.raw(`sections.${sectionKey}.${sectionKey === 'dataUsage' ? 'items' : 'rights'}`).map((item: string, idx: number) => (
                                            <li
                                                key={idx}
                                                className="text-[16px] leading-[26px] lg:text-[16px] lg:leading-[26px] md:text-[14px] md:leading-[22px] sm:text-[13px] sm:leading-[20px] font-medium"
                                                style={getFontStyles(locale)}
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    {sectionKey === 'yourRights' && (
                                        <>
                                            <div
                                                className="text-[16px] leading-[26px] lg:text-[16px] lg:leading-[26px] md:text-[14px] md:leading-[22px] sm:text-[13px] sm:leading-[20px] font-medium text-black mt-4"
                                                style={getFontStyles(locale)}
                                            >
                                                {t('sections.yourRights.exercise')}
                                            </div>
                                            <div
                                                className="text-[16px] leading-[26px] lg:text-[16px] lg:leading-[26px] md:text-[14px] md:leading-[22px] sm:text-[13px] sm:leading-[20px] font-medium text-black mt-4"
                                                style={getFontStyles(locale)}
                                            >
                                                {t('sections.yourRights.limitations')}
                                            </div>
                                        </>
                                    )}
                                </>
                            ) : sectionKey === 'consent' ? (
                                <>
                                    <div
                                        className="text-[16px] leading-[26px] lg:text-[16px] lg:leading-[26px] md:text-[14px] md:leading-[22px] sm:text-[13px] sm:leading-[20px] font-medium text-black whitespace-pre-line mb-4"
                                        style={getFontStyles(locale)}
                                    >
                                        {t('sections.consent.content')}
                                    </div>
                                    <div
                                        className="text-[16px] leading-[26px] lg:text-[16px] lg:leading-[26px] md:text-[14px] md:leading-[22px] sm:text-[13px] sm:leading-[20px] font-medium text-black mb-4"
                                        style={getFontStyles(locale)}
                                    >
                                        {t('sections.consent.methods')}
                                    </div>
                                    <ul className="list-disc list-inside space-y-2 text-black mb-4">
                                        {t.raw('sections.consent.methodsList').map((item: string, idx: number) => (
                                            <li
                                                key={idx}
                                                className="text-[16px] leading-[26px] lg:text-[16px] lg:leading-[26px] md:text-[14px] md:leading-[22px] sm:text-[13px] sm:leading-[20px] font-medium"
                                                style={getFontStyles(locale)}
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div
                                        className="text-[16px] leading-[26px] lg:text-[16px] lg:leading-[26px] md:text-[14px] md:leading-[22px] sm:text-[13px] sm:leading-[20px] font-medium text-black"
                                        style={getFontStyles(locale)}
                                    >
                                        {t('sections.consent.withdrawal')}
                                    </div>
                                </>
                            ) : (
                                <div
                                    className="text-[16px] leading-[26px] lg:text-[16px] lg:leading-[26px] md:text-[14px] md:leading-[22px] sm:text-[13px] sm:leading-[20px] font-medium text-black whitespace-pre-line"
                                    style={getFontStyles(locale)}
                                >
                                    {t(`sections.${sectionKey}.content`)}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}