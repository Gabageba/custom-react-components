// import "./styles.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import axios from "axios";

const style = {
  height: 100,
  border: "1px solid green",
  margin: 6,
  padding: 8
};
//https://jsonplaceholder.typicode.com/photos?_page=3&_limit=10
export default function App() {
  const [page, setPage] = useState(1);
  const [image, setImage] = useState([]);

  const fetchMoreData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
      );
      if (response) {
        setImage([...image, ...response.data]);
        setPage(page + 1);
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMoreData();
  }, []);
  return (
    <div className="App">
      <h1>React Infinity Scroll</h1>

      <InfiniteScroll
        dataLength={image.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading</h4>}
      >
        {image.map((i) => (
          <div>
            {/* <p>{i.url}</p> */}
            <img style={style} src={i.url} />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}
