import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Blog Page",
};
const blogPage = () => {
    const blog = [
        {
            "id": 1,
            "title": "Introduction to Next.js: A Beginner's Guide",
            "description": "Learn the basics of Next.js, a powerful React framework, and how to set up your first Next.js application. This guide covers installation, initial setup, and basic concepts to get you started quickly."
          },
          {
            "id": 2,
            "title": "Building Dynamic Pages with Next.js",
            "description": "Discover how to create dynamic and interactive pages using Next.js's powerful routing and API features. This blog explores how to fetch data, create dynamic routes, and enhance user experience with dynamic content."
          },
          {
            "id": 3,
            "title": "Next.js and Server-Side Rendering",
            "description": "Understand the benefits of server-side rendering (SSR) in Next.js and how it can improve the performance and SEO of your web applications. Learn how to implement SSR in your projects with practical examples."
          },
          {
            "id": 4,
            "title": "Styling Your Next.js Application",
            "description": "Explore different methods for styling your Next.js app, including CSS Modules, styled-components, and global styles. This blog provides examples and best practices for maintaining a clean and modular CSS structure."
          },
          {
            "id": 5,
            "title": "Optimizing Performance in Next.js",
            "description": "Learn techniques for optimizing the performance of your Next.js applications. Topics include image optimization, code splitting, lazy loading, and caching strategies to ensure your app runs smoothly and efficiently."
          },
          {
            "id": 6,
            "title": "API Routes in Next.js",
            "description": "Get to know how to create and use API routes in Next.js to handle backend logic. This guide covers setting up API endpoints, handling requests and responses, and integrating with databases and external APIs."
          },
          {
            "id": 7,
            "title": "Deploying Your Next.js App",
            "description": "Step-by-step guide on deploying your Next.js application to various platforms like Vercel, Netlify, and others. Learn the best practices for configuring your app for production and ensuring a smooth deployment process."
          },
          {
            "id": 8,
            "title": "Using Next.js with TypeScript",
            "description": "Learn how to set up and use TypeScript in your Next.js projects for type safety and a better development experience. This blog covers configuration, creating type-safe components, and leveraging TypeScript features in Next.js."
          },
          {
            "id": 9,
            "title": "Authentication in Next.js",
            "description": "Implement authentication in your Next.js application using popular methods and libraries such as JWT, Auth0, and NextAuth. This guide provides examples and best practices for securing your Next.js apps."
          }
    ]
    return (
        <main className="flex min-h-screen text-center flex-col items-center justify-between p-24">
            <div>
               <p className="text-6xl font-bold mb-10"> Blog Page</p>
                {
                    blog.map((blog, index) => <div className="border text-start p-7 rounded-lg my-6" key={index}>
                        <p className="text-xl font-bold mb-2">{blog.title}</p>
                        <p>{blog.description}</p>
                        <button className="btn mt-2">
                            <Link href={`blog/${blog.id}`}>veiw details</Link>
                        </button>
                    </div>)
                }
                </div>
        </main>
    );
};

export default blogPage;