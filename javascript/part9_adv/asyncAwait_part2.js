function getPostData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Post data fetched succesfully.");
    }, 2000);
  });
}

function getCommentData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Comment data fetched succesfully");
    }, 5000);
  });
}

async function getBlogData() {
  try {
    console.log("FEtching log data...");
    // const postData = await getPostData();
    // const commentData = await getCommentData();
    const [postData, commentData] = await Promise.all([
      getPostData(),
      getCommentData(),
    ]);
    console.log("fetch comepleted");
    console.log(postData);
    console.log(commentData);
  } catch (error) {
    console.error("Error fetching blog data", error);
  }
}
getBlogData();
