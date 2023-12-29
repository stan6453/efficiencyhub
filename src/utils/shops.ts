export const logos:any = {
    jumia: '/Jumia-Logo.png',
    konga: '/konga.svg',
}

export async function fetchOpenGraphData(url: string) {
    const website = await fetch(url)
    const html = await website.text()
    const parser = new DOMParser()
    const page = parser.parseFromString(html, "text/html")

    const title = page.querySelector('[property="og:title"]')?.getAttribute('content');
    const description = page.querySelector('[property="og:description"]')?.getAttribute('content');
    const image = page.querySelector('[property="og:image"]')?.getAttribute('content');

    return { title, description, image, page }
}
