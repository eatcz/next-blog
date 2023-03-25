import Image from "next/image";
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
const Article = () => {
  return (
    <div className="flex flex-col article-lists">
      {articles.map((item) => (
        <div
          key={item.id}
          className="flex justify-between p-2 my-4 overflow-hidden transition-all bg-white rounded cursor-pointer dark:hover:ring dark:bg-gray-800 hover:shadow item"
        >
          {/* {item.title} */}
          <div className="flex items-center justify-center overflow-hidden rounded-full min-w-max min-h-max article-img">
            <Image
              className=" sm:w-40 sm:h-40 hover:scale-100"
              src={item.bg_url}
              alt={"preview-img"}
              width={125}
              height={125}
            />
          </div>
          <div className="flex-1 w-full min-w-0 ml-4 article-content">
            <div className="mb-5 text-lg article-title sm:text-xl">
              <h3>{item.title}</h3>
            </div>
            <div className="max-w-full content">
              <p className="text-sm sm:text-base ellipsis">{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Article;
