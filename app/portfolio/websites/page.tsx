import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import WebsitesPage from '@/page-components/WebsitesPage'

export const metadata: Metadata = {
    title: 'Website Designs - Portfolio | Team Nirosha',
    description: 'Explore our collection of custom website designs and development projects.',
}

export default function Websites() {
    const websitesDir = path.join(process.cwd(), 'public/images/portfolio/websites')
    let websites: { id: string; image: string }[] = []

    try {
        if (fs.existsSync(websitesDir)) {
            const files = fs.readdirSync(websitesDir)
            const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp']

            websites = files
                .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()))
                .map(file => {
                    const basename = path.parse(file).name
                    return {
                        id: file,
                        image: `/images/portfolio/websites/${file}`, // Fallback
                        thumbnail: `/cache/portfolio/websites/${basename}-thumbnail.webp`,
                        full: `/cache/portfolio/websites/${basename}-large.webp`
                    }
                })
        }
    } catch (error) {
        console.error('Error reading website images:', error)
    }

    return <WebsitesPage websites={websites} />
}
