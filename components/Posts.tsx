import styles from "./Posts.module.css";

const postList = {
  2024: [
    {
      title: "The Great Pacific North-West",
      description:
        "Ashley and I's roadtrip adventure through the coast of of the Pacific North-West. A digital album and some observations I had navigating through new natural landscapes and cities.",
      datePosted: new Date("06/09/2024"),
    },
    {
      title: "The Great Pacific North-West",
      description:
        "Ashley and I's roadtrip adventure through the coast of of the Pacific North-West. A digital album and some observations I had navigating through new natural landscapes and cities.",
      datePosted: new Date("06/09/2024"),
    },
    {
      title: "The Great Pacific North-West",
      description:
        "Ashley and I's roadtrip adventure through the coast of of the Pacific North-West. A digital album and some observations I had navigating through new natural landscapes and cities.",
      datePosted: new Date("06/09/2024"),
    },
    {
      title: "The Great Pacific North-West",
      description:
        "Ashley and I's roadtrip adventure through the coast of of the Pacific North-West. A digital album and some observations I had navigating through new natural landscapes and cities.",
      datePosted: new Date("06/09/2024"),
    },
  ],
};

export default function Posts() {
  function formatDate(date: Date) {
    const dateFormatted = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
    }).format(date);
    return dateFormatted;
  }

  return (
    <div className={styles.container}>
      {Object.entries(postList).map(([year, posts]) => (
        <div className={styles.postContainer} key={year}>
          <h2 className={styles.yearTitle}>{year}</h2>
          {posts.map((post) => (
            <div className={styles.post} key={post.title}>
              <div className={styles.date}>
                <span>{formatDate(post.datePosted)}</span>
              </div>
              <div className={styles.content}>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
            </div>
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
