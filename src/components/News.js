import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
  articles = [
    {
        "source": { "id": "axios", "name": "Axios" },
        "author": "Adriel Bettelheim",
        "title": "Judge strikes down Affordable Care Act preventive services requirement - Axios",
        "description": "The Biden administration is expected to appeal the decision.",
        "url": "https://www.axios.com/2023/03/30/affordable-care-act-preventative-service-mandate-struck-down",
        "urlToImage": "https://images.axios.com/P4SoXkIqTWszpUm2G-CL2bT80nU=/0x89:4928x2861/1366x768/2023/03/30/1680189786728.jpg",
        "publishedAt": "2023-03-31T03:41:09Z",
        "content": "A federal judge in Texas ruled Thursday that employers can't be required to cover specified preventive health care services under the Affordable Care Act.\r\nWhy it matters: The ruling has major implic… [+3099 chars]"
      },
    {
        "source": { "id": "independent", "name": "Independent" },
        "author": "Andrea Blanco",
        "title": "Gwyneth Paltrow verdict – live: Goop mogul wins $1 damages as she whispers final message to ski crash accuser - The Independent",
        "description": "Actor and Goop founder has won a civil lawsuit regarding 2016 skiing collision involving retired optometrist Terry Sanderson at Deer Valley resort",
        "url": "https://www.independent.co.uk/news/world/americas/gwyneth-paltrow-verdict-video-ski-trial-legal-fees-b2311480.html",
        "urlToImage": "https://static.independent.co.uk/2023/03/31/00/f4b1a578ddd74d4fa00888bbb1670d26.jpg?quality=75&width=1200&auto=webp",
        "publishedAt": "2023-03-31T06:00:00Z",
        "content": "Gwyneth Paltrow has been cleared of all fault in a US lawsuit over a 2016 skiing collision, brought by retired optometrist Terry Sanderson.\r\nFollowing a high-profile two-week trial in Utah, jurors re… [+1298 chars]"
      },
    
    {
      source: { id: "cnn", name: "CNN" },
      author: "Elizabeth Wolfe, Paradise Afshar",
      title:
        "New details about 2017 Las Vegas mass shooter revealed in hundreds of FBI documents - CNN",
      description:
        "A cache of newly released FBI documents reveals Stephen Paddock, the gambler who carried out the deadliest mass shooting in modern US history in Las Vegas in 2017, may have harbored resentment over how he and other high rollers were treated by casinos.",
      url: "https://www.cnn.com/2023/03/31/us/las-vegas-2017-shooting-stephen-paddock-fbi-documents/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230330231605-01-las-vegas-shooting-memorial-100517-file-restricted.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-03-31T09:25:00Z",
      content:
        "A cache of newly released FBI documents reveals Stephen Paddock, the gambler who carried out the deadliest mass shooting in modern US history in Las Vegas in 2017, may have harbored resentment over h… [+3097 chars]",
    },
    {
      source: { id: "independent", name: "Independent" },
      author: "Namita Singh",
      title:
        "First funerals of Nashville shooting victims to take place - latest - The Independent",
      description:
        "Protesters flood Tennessee State Capitol on Thursday demanding lawmakers take action on guns",
      url: "https://www.independent.co.uk/news/world/americas/crime/nashville-shooting-911-calls-audrey-hale-sydney-sims-b2311453.html",
      urlToImage:
        "https://static.independent.co.uk/2023/03/29/22/Nashville_School_Shooting_70543.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2023-03-31T09:06:01Z",
      content:
        "Sign up to our free US news bulletin sent straight to your inbox each weekday morning\r\nSign up to our free morning US email news bulletin\r\nEvelyn Dieckhaus, nine, one of the victims of Mondays horrif… [+8556 chars]",
    },
  ];
  constructor() {
    super();
    console.log("This is test");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonk - Top Headlines</h1>

        <div className="row my-3">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title.slice(0,45)}
                description={element.description.slice(0,88)}
                imageUrl={element.urlToImage}
                newsUrl = {element.url}
              />
            </div>;
          })}

          {/* <div className="col-md-4">
          <NewsItem title="hello" description="wassup this is something" imageUrl="https://media.cnn.com/api/v1/images/stellar/prod/230330231605-01-las-vegas-shooting-memorial-100517-file-restricted.jpg?c=16x9&q=w_800,c_fill"/>
          </div>
         
          <div className="col-md-4">
          <NewsItem title="hello" description="wassup this is something" imageUrl="https://media.cnn.com/api/v1/images/stellar/prod/230330231605-01-las-vegas-shooting-memorial-100517-file-restricted.jpg?c=16x9&q=w_800,c_fill"/>
          </div> */}
        </div>
      </div>
    );
  }
}

export default News;
