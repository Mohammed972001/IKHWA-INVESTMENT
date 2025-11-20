'use client';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { getFontStyles } from '@/utils/fonts';
import { useDetectedLocale } from '@/hooks/useDetectedLocale';

export default function PrivacyPage() {
    const t = useTranslations('Privacy');
    const locale = useDetectedLocale();
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Ensure component is mounted before accessing theme
    useEffect(() => {
        setMounted(true);
    }, []);

    // Get the current theme (fallback to 'light' if not mounted)
    const currentTheme = mounted ? (resolvedTheme || theme || 'light') : 'light';
    const isDark = currentTheme === 'dark';

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
        <div className={`mt-20 min-h-screen transition-colors duration-200 ${isDark ? 'bg-gray-950 text-gray-100' : 'bg-white text-gray-900'}`}>
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Header Section */}
                <div className="mb-12 ">
                    <h1
                        className={`text-[32px] leading-[36px] lg:text-[32px] lg:leading-[36px] md:text-[28px] md:leading-[32px] sm:text-[24px] sm:leading-[28px] font-medium mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
                        style={getFontStyles(locale)}
                    >
                        {t('hero.title')}
                    </h1>
                    <div className="max-w-4xl ">
                        <p
                            className={`text-[16px] leading-[24px] lg:text-[16px] lg:leading-[24px] md:text-[14px] md:leading-[21px] sm:text-[13px] sm:leading-[19px] font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}
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
                                className={`text-[18px] leading-[24px] lg:text-[18px] lg:leading-[24px] md:text-[16px] md:leading-[22px] sm:text-[15px] sm:leading-[20px] font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}
                                style={getFontStyles(locale)}
                            >
                                {t(`sections.${sectionKey}.title`)}
                            </h2>

                            {sectionKey === 'definitions' ? (
                                <div className="space-y-4">
                                    <div>
                                        <h3
                                            className={`text-[16px] leading-[22px] font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                                            style={getFontStyles(locale)}
                                        >
                                            {t('sections.definitions.company.title')}
                                        </h3>
                                        <div
                                            className={`text-[16px] leading-[22px] lg:text-[16px] lg:leading-[22px] md:text-[14px] md:leading-[20px] sm:text-[13px] sm:leading-[18px] font-medium ${isDark ? 'text-gray-300' : 'text-black'}`}
                                            style={getFontStyles(locale)}
                                        >
                                            {t('sections.definitions.company.content')}
                                        </div>
                                    </div>
                                    <div>
                                        <h3
                                            className={`text-[16px] leading-[22px] font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                                            style={getFontStyles(locale)}
                                        >
                                            {t('sections.definitions.customer.title')}
                                        </h3>
                                        <div
                                            className={`text-[16px] leading-[22px] lg:text-[16px] lg:leading-[22px] md:text-[14px] md:leading-[20px] sm:text-[13px] sm:leading-[18px] font-medium ${isDark ? 'text-gray-300' : 'text-black'}`}
                                            style={getFontStyles(locale)}
                                        >
                                            {t('sections.definitions.customer.content')}
                                        </div>
                                    </div>
                                    <div>
                                        <h3
                                            className={`text-[16px] leading-[22px] font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                                            style={getFontStyles(locale)}
                                        >
                                            {t('sections.definitions.personalInfo.title')}
                                        </h3>
                                        <div
                                            className={`text-[16px] leading-[22px] lg:text-[16px] lg:leading-[22px] md:text-[14px] md:leading-[20px] sm:text-[13px] sm:leading-[18px] font-medium ${isDark ? 'text-gray-300' : 'text-black'}`}
                                            style={getFontStyles(locale)}
                                        >
                                            {t('sections.definitions.personalInfo.content')}
                                        </div>
                                    </div>
                                </div>
                            ) : sectionKey === 'dataCollection' ? (
                                <>
                                    <div
                                        className={`text-[16px] leading-[22px] lg:text-[16px] lg:leading-[22px] md:text-[14px] md:leading-[20px] sm:text-[13px] sm:leading-[18px] font-medium mb-4 ${isDark ? 'text-gray-300' : 'text-black'}`}
                                        style={getFontStyles(locale)}
                                    >
                                        {t('sections.dataCollection.intro')}
                                    </div>
                                    <ol className={`list-decimal list-inside space-y-2 mb-4 ${isDark ? 'text-gray-300' : 'text-black'}`}>
                                        {t.raw('sections.dataCollection.items').map((item: string, idx: number) => (
                                            <li
                                                key={idx}
                                                className="text-[16px] leading-[22px] lg:text-[16px] lg:leading-[22px] md:text-[14px] md:leading-[20px] sm:text-[13px] sm:leading-[18px] font-semibold"
                                                style={getFontStyles(locale)}
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ol>
                                    <div
                                        className={`text-[16px] leading-[22px] lg:text-[16px] lg:leading-[22px] md:text-[14px] md:leading-[20px] sm:text-[13px] sm:leading-[18px] font-medium mb-4 ${isDark ? 'text-gray-300' : 'text-black'}`}
                                        style={getFontStyles(locale)}
                                    >
                                        {t('sections.dataCollection.additional')}
                                    </div>
                                    <ol className={`list-decimal list-inside space-y-2 ${isDark ? 'text-gray-300' : 'text-black'}`}>
                                        {t.raw('sections.dataCollection.employmentItems').map((item: string, idx: number) => (
                                            <li
                                                key={idx}
                                                className="text-[16px] leading-[22px] lg:text-[16px] lg:leading-[22px] md:text-[14px] md:leading-[20px] sm:text-[13px] sm:leading-[18px] font-semibold"
                                                style={getFontStyles(locale)}
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ol>
                                </>
                            ) : (sectionKey === 'dataUsage' || sectionKey === 'yourRights') ? (
                                <>
                                    <div
                                        className={`text-[16px] leading-[22px] lg:text-[16px] lg:leading-[22px] md:text-[14px] md:leading-[20px] sm:text-[13px] sm:leading-[18px] font-medium mb-4 ${isDark ? 'text-gray-300' : 'text-black'}`}
                                        style={getFontStyles(locale)}
                                    >
                                        {t(`sections.${sectionKey}.intro`)}
                                    </div>
                                    <ol className={`list-decimal list-inside space-y-2 ${isDark ? 'text-gray-300' : 'text-black'}`}>
                                        {t.raw(`sections.${sectionKey}.${sectionKey === 'dataUsage' ? 'items' : 'rights'}`).map((item: string, idx: number) => (
                                            <li
                                                key={idx}
                                                className="text-[16px] leading-[22px] lg:text-[16px] lg:leading-[22px] md:text-[14px] md:leading-[20px] sm:text-[13px] sm:leading-[18px] font-semibold"
                                                style={getFontStyles(locale)}
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ol>
                                    {sectionKey === 'yourRights' && (
                                        <>
                                            <div
                                                className={`text-[16px] leading-[22px] lg:text-[16px] lg:leading-[22px] md:text-[14px] md:leading-[20px] sm:text-[13px] sm:leading-[18px] font-medium mt-4 ${isDark ? 'text-gray-300' : 'text-black'}`}
                                                style={getFontStyles(locale)}
                                            >
                                                {t('sections.yourRights.exercise')}
                                            </div>
                                            <div
                                                className={`text-[16px] leading-[22px] lg:text-[16px] lg:leading-[22px] md:text-[14px] md:leading-[20px] sm:text-[13px] sm:leading-[18px] font-medium mt-4 ${isDark ? 'text-gray-300' : 'text-black'}`}
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
                                        className={`text-[16px] leading-[22px] lg:text-[16px] lg:leading-[22px] md:text-[14px] md:leading-[20px] sm:text-[13px] sm:leading-[18px] font-medium whitespace-pre-line mb-4 ${isDark ? 'text-gray-300' : 'text-black'}`}
                                        style={getFontStyles(locale)}
                                    >
                                        {t('sections.consent.content')}
                                    </div>
                                    <div
                                        className={`text-[16px] leading-[22px] lg:text-[16px] lg:leading-[22px] md:text-[14px] md:leading-[20px] sm:text-[13px] sm:leading-[18px] font-medium mb-4 ${isDark ? 'text-gray-300' : 'text-black'}`}
                                        style={getFontStyles(locale)}
                                    >
                                        {t('sections.consent.methods')}
                                    </div>
                                    <ol className={`list-decimal list-inside space-y-2 mb-4 ${isDark ? 'text-gray-300' : 'text-black'}`}>
                                        {t.raw('sections.consent.methodsList').map((item: string, idx: number) => (
                                            <li
                                                key={idx}
                                                className="text-[16px] leading-[22px] lg:text-[16px] lg:leading-[22px] md:text-[14px] md:leading-[20px] sm:text-[13px] sm:leading-[18px] font-semibold"
                                                style={getFontStyles(locale)}
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ol>
                                    <div
                                        className={`text-[16px] leading-[22px] lg:text-[16px] lg:leading-[22px] md:text-[14px] md:leading-[20px] sm:text-[13px] sm:leading-[18px] font-medium ${isDark ? 'text-gray-300' : 'text-black'}`}
                                        style={getFontStyles(locale)}
                                    >
                                        {t('sections.consent.withdrawal')}
                                    </div>
                                </>
                            ) : (
                                <div
                                    className={`text-[16px] leading-[22px] lg:text-[16px] lg:leading-[22px] md:text-[14px] md:leading-[20px] sm:text-[13px] sm:leading-[18px] font-medium whitespace-pre-line ${isDark ? 'text-gray-300' : 'text-black'}`}
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