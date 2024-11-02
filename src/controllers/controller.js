export const controller = async (req, res) => {
  try {
    return res.status(200).send("<h1>Hello World</h1>");
  } catch (error) {
    console.error("Error sending file:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while sending the file." });
  }
};
