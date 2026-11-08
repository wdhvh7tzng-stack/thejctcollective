import type {Metadata} from 'next';
import localFont from 'next/font/local';
import {Header} from '@/components/interactive';
import {Footer} from '@/components/editorial';
import {site} from '@/content/site';
import './globals.css';
const geist=localFont({src:'../../node_modules/geist/dist/fonts/geist-sans/Geist-Regular.woff2',variable:'--font-geist',display:'swap'});
export const metadata:Metadata={title:{default:'the jct collective | Independent Strategy & Creative Studio',template:'%s | the jct collective'},description:site.description,...(process.env.NEXT_PUBLIC_SITE_URL?{metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL)}:{}),openGraph:{title:site.name,description:site.description,type:'website',images:[{url:`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/opengraph-image`,width:1200,height:630}]},twitter:{card:'summary_large_image'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={geist.variable}><a href="#main" className="skip-link">Skip to content</a><div className="sheet"><Header/><main id="main">{children}</main><Footer/></div></body></html>}
