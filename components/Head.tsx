// React
import React from 'react';
// Nextjs
import { useRouter } from 'next/router';
import Head  from 'next/head';
// Contexts
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
// Version
import { version } from '../package.json';

export const CustomHead = () => {
  const { theme } = useTheme();
  const locale = useLanguage();
  const router = useRouter();
  const meta = {
    title: locale.dictionary.meta[router.pathname.replace("/", "")]?.title || '',
    description: locale.dictionary.meta[router.pathname.replace("/", "")]?.description || '',
    imageUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/media.jpg` || '',
    url: process.env.NEXT_PUBLIC_SITE_URL || '',
    keywords: locale.dictionary.meta[router.pathname.replace("/", "")]?.keywords || ''
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="author" content="Francisco Moya" />
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="build version" content={version} />
      <meta name="robots" content="index,follow" />

      {/* Google */}
      <meta itemProp="name" content={meta.title} key="title" />
      <meta itemProp="description" content={meta.description} key="desc" />
      <meta itemProp="image" content={meta.imageUrl} key="image" />

      {/* Open Graph */}
      <meta property="og:type" content="website" key="ogtype" />
      <meta property="og:url" content={meta.url} key="ogurl" />
      <meta property="og:image" content={meta.imageUrl} key="ogimage" />
      <meta property="og:title" content={meta.title} key="ogtitle" />
      <meta property="og:description" content={meta.description} key="ogdesc" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" key="twcard" />
      <meta property="twitter:url" content={meta.url} />
      <meta name="twitter:creator" content="@Franxo06" key="twcreator" />
      <meta name="twitter:image" content={meta.imageUrl} key="twimage" />
      <meta name="twitter:title" content={meta.title} key="twtitle" />
      <meta name="twitter:description" content={meta.description} key="twdesc" />
      <link rel="canonical" href={meta.url} />
      <link rel="icon" href={`/favicon/favicon-${theme}.ico`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`/favicon/favicon-32x32-${theme}.png`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`/favicon/favicon-16x16-${theme}.png`} />
    </Head>
  )
}

export default CustomHead
