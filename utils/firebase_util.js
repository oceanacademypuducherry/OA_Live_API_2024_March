function getFilePathFromFirebaseURL(firebaseUrl) {
  try {
    const url = new URL(firebaseUrl);
    const encodedPath = url.pathname.split("/o/")[1];
    return decodeURIComponent(encodedPath.split("?")[0]);
  } catch (error) {
    console.error("Error extracting file path:", error);
    return null;
  }
}

module.exports = { getFilePathFromFirebaseURL };
