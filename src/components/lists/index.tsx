import Image from "next/image";
import MainTitle from "./mainTitle";
import Article from "./article";
import PrimaryPagin from "../pagination/primary";
import "animate.css";
const articles = [
  {
    id: 1,
    title: "文章标题",
    content:
      "文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容",
    desc: "文章描述",
    update_time: "2023年3月23日",
    bg_url: "https://p.qqan.com/up/2023-3/2023321133888563.jpg",
  },
  {
    id: 2,
    title: "文章标题",
    content:
      "文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容",
    desc: "文章描述",
    update_time: "2023年3月23日",
    bg_url: "https://p.qqan.com/up/2023-3/20233713485692.jpg",
  },
  {
    id: 3,
    title: "文章标题",
    content: "文章内容",
    desc: "文章描述",
    update_time: "2023年3月23日",
    bg_url: "https://p.qqan.com/up/2023-3/2023331414196505.jpg",
  },
  {
    id: 4,
    title: "文章标题",
    content: "文章内容",
    desc: "文章描述",
    update_time: "2023年3月23日",
    bg_url: "https://p.qqan.com/up/2023-3/202332133527688.jpg",
  },
];
const List = () => {
  return (
    <main className="flex-1 h-full mb-8 overflow-y-hidden main">
      <div className="container mx-auto animate__fadeInUp animate__animated ">
        <section className="max-w-3xl px-5 mx-auto section">
          {/* <div className="flex items-center my-5 content-title ">
            <svg
              className="w-8 h-8 icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="8744"
            >
              <path
                d="M680.618667 668.330667l-162.474667-93.525334 215.381333-322.901333 118.784 68.608z"
                fill="#FBDF83"
                p-id="8745"
              ></path>
              <path
                d="M680.618667 668.330667l-162.474667-93.866667-40.277333 120.832 118.442666 68.266667z"
                fill="#FBDF83"
                p-id="8746"
              ></path>
              <path
                d="M561.152 823.978667l-134.485333-34.133334 51.2-94.549333 118.442666 67.925333zM565.930667 516.096l144.725333 83.626667"
                fill="#FBDF83"
                p-id="8747"
              ></path>
              <path
                d="M650.922667 623.274667c-3.413333 0-6.485333-0.682667-9.557334-2.389334l-162.133333-93.525333c-4.437333-2.730667-7.850667-6.826667-8.874667-11.946667-1.024-5.12-0.341333-10.581333 2.730667-14.677333L688.469333 177.493333c5.461333-8.192 16.384-10.922667 25.258667-5.802666l118.784 68.608c8.533333 5.12 11.946667 15.701333 7.509333 24.576l-171.690666 347.818666c-2.389333 4.778667-6.485333 8.192-11.264 9.557334-2.389333 0.682667-4.096 1.024-6.144 1.024z m-135.168-118.784l127.317333 73.386666 154.965333-314.026666L709.973333 212.992l-194.218666 291.498667z"
                p-id="8748"
              ></path>
              <path
                d="M565.930667 720.896c-3.072 0-6.485333-0.682667-9.557334-2.389333l-118.784-68.608c-7.850667-4.437333-11.264-13.994667-8.533333-22.186667l40.618667-120.490667c1.706667-5.461333 5.802667-9.557333 11.264-11.605333 5.12-2.048 11.264-1.365333 16.042666 1.365333l162.133334 93.525334c4.778667 2.730667 8.192 7.850667 9.216 13.312 1.024 5.461333-0.682667 11.264-4.437334 15.36l-83.968 95.573333c-3.754667 3.754667-8.874667 6.144-13.994666 6.144zM470.016 624.64l91.818667 52.906667 58.709333-66.56-122.197333-70.314667-28.330667 83.968z"
                p-id="8749"
              ></path>
              <path
                d="M536.917333 782.677333l-172.373333-43.690666L440.32 607.573333l148.48 85.674667-51.882667 89.429333z m-115.029333-67.925333l96.597333 24.576 18.432-32.085333-82.944-47.786667-32.085333 55.296zM509.754027 458.738347l18.773333-32.515414 177.3568 102.4-18.773333 32.515414z"
                p-id="8750"
              ></path>
              <path
                d="M747.178667 695.296h-110.933334l-35.84 37.546667h146.773334c22.528 0 40.618667 18.090667 40.618666 40.618666s-18.090667 40.618667-40.618666 40.618667H328.362667c-1.365333 0-2.730667-0.341333-4.096-0.341333v37.888c1.365333 0 2.730667 0.341333 4.096 0.341333h418.816c43.349333 0 78.506667-35.157333 78.506666-78.506667s-35.157333-78.165333-78.506666-78.165333z"
                p-id="8751"
              ></path>
            </svg>
            <h3 className="text-xl title">文章</h3>
          </div> */}
          <MainTitle />
          <Article />
        </section>
        {/* 分页 */}
        <div className="flex justify-center py-2 pagination dark:text-white">
          <PrimaryPagin />
        </div>
      </div>
    </main>
  );
};

export default List;
