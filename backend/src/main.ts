import api from "./api";

const port = 5001;

api.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});