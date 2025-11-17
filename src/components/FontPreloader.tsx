import Script from 'next/script';

export default function FontPreloader({ locale }: { locale: string }) {
    return (
        <>
            <Script
                id="font-preload"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            (function() {
              const fonts = ${locale === 'ar'
                            ? `[
                  '/fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-Regular.ttf',
                  '/fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-SemiBold.ttf'
                ]`
                            : `['/fonts/Lato/Lato-Regular.ttf']`
                        };
              
              fonts.forEach(function(font) {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.as = 'font';
                link.type = 'font/ttf';
                link.href = font;
                link.crossOrigin = 'anonymous';
                document.head.appendChild(link);
              });
            })();
          `,
                }}
            />
        </>
    );
}
