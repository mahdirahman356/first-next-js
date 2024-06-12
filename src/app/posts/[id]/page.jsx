

export const generateMetadata = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postData = await res.json()
    return{
        title: `${postData.title}`,
        description: `${postData.body}`,
    }
}  


const postDetails = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}
const detailsPage = async ({ params }) => {
    console.log(params.id)
    const {title, body} = await postDetails(params.id)
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="text-center">
                <p className="text-4xl font-bold mb-2">{title}</p>
                <p className="w-[70%] mx-auto text-gray-400">{body}</p>
            </div>
        </main>
    );
};

export default detailsPage;