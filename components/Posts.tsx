import { useRef } from "react";
import styles from "./Posts.module.scss";
import Link from "next/link";

const postList = {
  2024: [
    {
      id: "pacific-northwest",
      title: "The Great Pacific Northwest",
      description:
        "A roadtrip adventure through the coast of the Pacific Northwest. My observations of the cities and people in Oregon and Washington.",
      datePosted: new Date("06/09/2024"),
    },
    {
      id: "surfing-the-internet",
      title: "Surfing the Internet",
      description:
        "My thoughts on the current state of the Internet from a guy who makes things on the Internet.",
      datePosted: new Date("05/06/2024"),
    },
    {
      id: "thailand-finale",
      title: "Thailand (Finale)",
      description:
        "Finale of the Southeast Asia saga. A summary of my final weeks spent in Bangkok.",
      datePosted: new Date("04/06/2024"),
    },
    {
      id: "thailand",
      title: "Thailand + 💭",
      description:
        "From Chanthaburi to Bangkok - My thoughts and observations through it all.",
      datePosted: new Date("03/20/2024"),
    },
    {
      id: "cambodia",
      title: "Cambodia",
      description:
        "Hot hot Cambodia. Our 1.5 week journey biking through the deserts and jungles of Cambodia.",
      datePosted: new Date("03/10/2024"),
    },
    {
      id: "vietnam-three",
      title: "Vietnam (Part 3)",
      description:
        "Finale of Vietnam. Pictures and memories from Saigon to the Mykong River Delta.",
      datePosted: new Date("03/02/2024"),
    },
    {
      id: "vietnam-two",
      title: "Vietnam (Part 2)",
      description: "Hội An to Saigon. Memories of adventure and freedom.",
      datePosted: new Date("02/26/2024"),
    },
    {
      id: "vietnam-one",
      title: "Vietnam (Part 1)",
      description:
        "The first week in Vietnam. From Hanoi to Huế, my observations of this new country.",
      datePosted: new Date("02/14/2024"),
    },
    {
      id: "jacuzzi-encounters",
      title: "Important Jacuzzi Encounters",
      description:
        "A spontaneous story of meeting an extraordinary person at a jacuzzi.",
      datePosted: new Date("01/29/2024"),
    },
    {
      id: "goodbye-bay-area",
      title: "A Reflection of the Bay Area",
      description:
        "A farewell message to Mountain View and San Fransisco which was my home for the past 2 years.",
      datePosted: new Date("01/16/2024"),
    },
  ],
  2023: [
    {
      id: "what-comes-next-2024",
      title: "What Comes Next?",
      description:
        "A New Years Resolution and a look back on the previous year.",
      datePosted: new Date("12/31/2023"),
    },
    {
      id: "walk-around-the-block",
      title: "A Walk Around the Block",
      description: "How my brain works during a short walk around the block.",
      datePosted: new Date("12/18/2023"),
    },
    {
      id: "nick-dorian",
      title: "Nick Dorian and People You Surround Yourself With",
      description:
        "Thoughts and praises watching Nick Dorian at the Silverlake Lounge. A short thought on the people you surround yourself with.",
      datePosted: new Date("12/11/2023"),
    },
    {
      id: "fam-takes-seattle",
      title: "Fam takes on Seattle",
      description:
        "A Thanksgiving trip to Seattle. The Enokida family tours a new city.",
      datePosted: new Date("12/09/2023"),
    },
    {
      id: "starting-a-blog",
      title: "Starting a blog",
      description:
        "My first post! A short welcome message to the readers of this website.",
      datePosted: new Date("12/07/2023"),
    },
  ],
};

function formatDate(date: Date) {
  const dateFormatted = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
  }).format(date);
  return dateFormatted;
}

export default function Posts() {
  return (
    <div className={styles.container}>
      {Object.entries(postList)
        .toSorted()
        .reverse()
        .map(([year, posts]) => (
          <div className={styles.postContainer} key={year}>
            <h2 className={styles.yearTitle}>{year}</h2>
            {posts.map((post) => (
              <Link
                href={`/post/${post.id}`}
                className={styles.post}
                key={post.title}
              >
                <div className={styles.date}>
                  <span>{formatDate(post.datePosted)}</span>
                </div>
                <div className={styles.content}>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        ))}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
