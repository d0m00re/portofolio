import { Metadata } from "next";

interface IConstructMetadata {
  title ?: string,
  description ?: string,
  image ?: string,
  icons ?: string,
  noindex ?: boolean
}

export function constructMetadata({
  title = "Portofolio - the SaaS for students",
  description = "Hi, I'm a fullstack developer specializing in javascript stack",
  image = "/hero/me.png",
  icons = "/favicon.ico",
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@jacklapiquette"
    },
    icons,
    metadataBase: new URL('https://portofoliio-cljy8dcch-d0m00re.vercel.app/'),
    themeColor: '#FFF',
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}