'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { getFontStyles } from '@/utils/fonts';
import { useDetectedLocale } from '@/hooks/useDetectedLocale';

const Footer = () => {
    const { t, locale } = useTranslation();
    const detectedLocale = useDetectedLocale();

    const handleFooterNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.includes('#')) {
            e.preventDefault();
            const sectionId = href.split('#')[1];

            // Check if we're currently on the home page
            const currentPath = window.location.pathname;
            const isOnHomePage = currentPath === `/${locale}` || currentPath === '/';

            if (isOnHomePage) {
                // If on home page, scroll to the section directly
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            } else {
                // If not on home page, navigate to home page with hash
                window.location.href = `/${locale}#${sectionId}`;
            }
        }
    };

    const socialMediaLinks = [
        {
            name: t('Home.footer.followUs.facebook'),
            icon: '/Home/Footer/Fecbook.svg',
            url: 'https://www.facebook.com/ikhwainvestment'
        },
        {
            name: t('Home.footer.followUs.instagram'),
            icon: '/Home/Footer/mdi_instagram.svg',
            url: 'https://www.instagram.com/ikhwainvestments'
        },
        {
            name: t('Home.footer.followUs.twitter'),
            icon: '/Home/Footer/line-md_twitter-x.svg',
            url: 'https://x.com/ikhwainvestment'
        },
        {
            name: t('Home.footer.followUs.linkedin'),
            icon: '/Home/Footer/ri_linkedin-fill.svg',
            url: 'https://www.linkedin.com/showcase/ikhwainvestments'
        },
        {
            name: t('Home.footer.followUs.telegram'),
            icon: '/Home/Footer/ic_outline-telegram.svg',
            url: 'https://t.me/ikhwainvestments'
        },
        {
            name: t('Home.footer.followUs.youtube'),
            icon: '/Home/Footer/mdi_youtube.svg',
            url: 'https://www.youtube.com/@ikhwainvestments'
        }
    ];

    return (
        <footer className="footer-container">
            <div className="footer-wrapper">
                {/* Logo Section */}
                <div className="footer-section footer-logo-section">
                    <div className="footer-logo">
                        <Image
                            src="/logo2.png"
                            alt="IKHWA INVESTMENTS Logo"
                            width={500}
                            height={100}
                            className="logo-image"
                            style={{ width: 'auto', height: 'auto' }}
                        />
                    </div>
                </div>

                {/* Company Information Section */}
                <div className="footer-section footer-company-info">
                    <h3 className="footer-title " style={getFontStyles(detectedLocale, { fontSize: '1.375rem' })}>{t('Home.footer.companyInfo.title')}</h3>
                    <p className="footer-description" style={getFontStyles(detectedLocale, { fontSize: '1rem' })}>
                        {t('Home.footer.companyInfo.description')}
                    </p>
                </div>

                {/* Quick Links Section */}
                <div className="footer-section footer-quick-links">
                    <h3 className="footer-title" style={getFontStyles(detectedLocale, { fontSize: '1.375rem' })}>{t('Home.footer.quickLinks.title')}</h3>
                    <ul className="footer-links-list">
                        <li>
                            <Link
                                href={`/${locale}`}
                                className="footer-link"
                                style={getFontStyles(detectedLocale, { fontSize: '1rem' })}
                                onClick={(e) => handleFooterNavClick(e, `/${locale}`)}
                            >
                                {t('Home.footer.quickLinks.home')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${locale}#about-us`}
                                className="footer-link"
                                style={getFontStyles(detectedLocale, { fontSize: '1rem' })}
                                onClick={(e) => handleFooterNavClick(e, `/${locale}#about-us`)}
                            >
                                {t('Home.footer.quickLinks.aboutUs')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${locale}#services`}
                                className="footer-link"
                                style={getFontStyles(detectedLocale, { fontSize: '1rem' })}
                                onClick={(e) => handleFooterNavClick(e, `/${locale}#services`)}
                            >
                                {t('Home.footer.quickLinks.services')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${locale}/CompanyFormation`}
                                className="footer-link"
                                style={getFontStyles(detectedLocale, { fontSize: '1rem' })}
                                onClick={(e) => handleFooterNavClick(e, `/${locale}/CompanyFormation`)}
                            >
                                {t('Home.footer.quickLinks.companyFormation')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${locale}#contact`}
                                className="footer-link"
                                style={getFontStyles(detectedLocale, { fontSize: '1rem' })}
                                onClick={(e) => handleFooterNavClick(e, `/${locale}#contact`)}
                            >
                                {t('Home.footer.quickLinks.contactUs')}
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Information Section */}
                <div className="footer-section footer-information">
                    <h3 className="footer-title" style={getFontStyles(detectedLocale, { fontSize: '1.375rem' })}>{t('Home.footer.information.title')}</h3>
                    <ul className="footer-links-list">
                        <li>
                            <Link href={`/${locale}/terms`} className="footer-link" style={getFontStyles(detectedLocale, { fontSize: '1rem' })}>
                                {t('Home.footer.information.termsConditions')}
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${locale}/privacy`} className="footer-link" style={getFontStyles(detectedLocale, { fontSize: '1rem' })}>
                                {t('Home.footer.information.privacyPolicy')}
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Follow Us Section */}
                <div className="footer-section footer-follow-us">
                    <h3 className="footer-title" style={getFontStyles(detectedLocale, { fontSize: '1.375rem' })}>{t('Home.footer.followUs.title')}</h3>
                    <ul className="footer-social-links">
                        {socialMediaLinks.map((social, index) => (
                            <li key={index} className="footer-social-item">
                                <a
                                    href={social.url}
                                    className="footer-social-link"
                                    style={getFontStyles(detectedLocale, { fontSize: '1rem' })}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                  
                                    <span className="footer-social-text" style={{ pointerEvents: 'none' }}>{social.name}</span>
                                      <Image
                                        src={social.icon}
                                        alt={social.name}
                                        width={24}
                                        height={24}
                                        className="footer-social-icon"
                                        style={{ pointerEvents: 'none' }}
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;