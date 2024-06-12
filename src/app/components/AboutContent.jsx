import Link from "next/link";

const AboutContent = () => {
    return (
        <div className="flex mt-12 justify-center gap-7">
            <Link href={"/about/history"}><button className="btn">History</button></Link>
            <Link href={"/about/mission"}><button className="btn">Mission</button></Link>
        </div>
    );
};

export default AboutContent;