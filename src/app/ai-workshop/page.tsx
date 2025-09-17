import Header from "@shared/HeaderComponent";
import Footer from "@shared/FooterComponent";

export default async function Home() {
    // const res = await fetch("https://retoolapi.dev/y7FjzD/data")
    // const posts = await res.json()
    // console.log(posts)
    // {/* <ul>
    //         {posts.map((post: { id: number; name: string; }) => (
    //             <li key={post.id}>{post["name"]}</li>
    //         ))}
    //     </ul> */}
    return (
        <main className="bg-gray-200 px-10" >
        <Header/>
        <section>


        </section>
        <Footer/>
        </main>
    )
  }
  