import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
        <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
          <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
            <Link
              href="/" 
              className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm"
            >
              Xをフォローする
            </Link>
            <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Post Weiter</h1>
            <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">このアプリケーションはNext.js
               AppRouterで作成されました。ユーザは自由にポスト可能です。
            </p>
            <div className="space-x-4">
              <Link
                href={siteConfig.links.x}
                className={cn(buttonVariants({ size: "lg" }))}
                >始める
              </Link>
              <Link
                href={siteConfig.links.github}
                className={cn(buttonVariants({ size: "lg" , variant: "outline"}))}
                target="_brank"
                rel="noreferrer"
                >GitHub
              </Link>
            </div>
          </div>
        </section>

        <section 
          id="features"
          className="container py-8 md:py-12 lg:py-24 bg-slate-50 space-y-6"
        >
          <div className="text-center space-y-6 max-w-[58rem] mx-auto">
            <h2 className="font-extrabold text-3xl md:text-6xl">
              サービスの特徴
            </h2>
            <p className="text-muted-foreground sm:text-lg sm:leading-7">
              このプロジェクトはモダンな技術スタックを使用して作られたアプリです。
            </p>
          </div>
          <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[60rem]">
            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-center p-6 h-[180px]">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 15 15">
                    <path fill="currentColor" d="m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5h.5Zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15v-1ZM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5h-1ZM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0v1Zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1V0ZM5 12V4.5H4V12h1Zm-.905-7.207l6.5 9l.81-.586l-6.5-9l-.81.586ZM10 4v6h1V4h-1Z"/>
                  </svg>
                  <div className="space-y-2">
                    <h3 className="font-bold">Next.js14</h3>
                    <p className="text-sm text-muted-foreground">
                      Next.jsのAPIを使用して…
                    </p>
                  </div>
              </div>
            </div>
            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-center p-6 h-[180px]">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 15 15">
                    <path fill="currentColor" d="m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5h.5Zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15v-1ZM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5h-1ZM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0v1Zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1V0ZM5 12V4.5H4V12h1Zm-.905-7.207l6.5 9l.81-.586l-6.5-9l-.81.586ZM10 4v6h1V4h-1Z"/>
                  </svg>
                  <div className="space-y-2">
                    <h3 className="font-bold">Next.js14</h3>
                    <p className="text-sm text-muted-foreground">
                      Next.jsのAPIを使用して…
                    </p>
                  </div>
              </div>
            </div>
            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-center p-6 h-[180px]">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 15 15">
                    <path fill="currentColor" d="m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5h.5Zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15v-1ZM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5h-1ZM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0v1Zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1V0ZM5 12V4.5H4V12h1Zm-.905-7.207l6.5 9l.81-.586l-6.5-9l-.81.586ZM10 4v6h1V4h-1Z"/>
                  </svg>
                  <div className="space-y-2">
                    <h3 className="font-bold">Next.js14</h3>
                    <p className="text-sm text-muted-foreground">
                      Next.jsのAPIを使用して…
                    </p>
                  </div>
              </div>
            </div>
            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-center p-6 h-[180px]">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 15 15">
                    <path fill="currentColor" d="m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5h.5Zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15v-1ZM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5h-1ZM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0v1Zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1V0ZM5 12V4.5H4V12h1Zm-.905-7.207l6.5 9l.81-.586l-6.5-9l-.81.586ZM10 4v6h1V4h-1Z"/>
                  </svg>
                  <div className="space-y-2">
                    <h3 className="font-bold">Next.js14</h3>
                    <p className="text-sm text-muted-foreground">
                      Next.jsのAPIを使用して…
                    </p>
                  </div>
              </div>
            </div>
            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-center p-6 h-[180px]">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 15 15">
                    <path fill="currentColor" d="m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5h.5Zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15v-1ZM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5h-1ZM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0v1Zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1V0ZM5 12V4.5H4V12h1Zm-.905-7.207l6.5 9l.81-.586l-6.5-9l-.81.586ZM10 4v6h1V4h-1Z"/>
                  </svg>
                  <div className="space-y-2">
                    <h3 className="font-bold">Next.js14</h3>
                    <p className="text-sm text-muted-foreground">
                      Next.jsのAPIを使用して…
                    </p>
                  </div>
              </div>
            </div>
            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-center p-6 h-[180px]">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 15 15">
                    <path fill="currentColor" d="m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5h.5Zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15v-1ZM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5h-1ZM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0v1Zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1V0ZM5 12V4.5H4V12h1Zm-.905-7.207l6.5 9l.81-.586l-6.5-9l-.81.586ZM10 4v6h1V4h-1Z"/>
                  </svg>
                  <div className="space-y-2">
                    <h3 className="font-bold">Next.js14</h3>
                    <p className="text-sm text-muted-foreground">
                      Next.jsのAPIを使用して…
                    </p>
                  </div>
              </div>
            </div>
          </div>
          
      </section>
    </>
  );
}