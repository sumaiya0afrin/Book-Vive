import { toast } from "react-toastify";

const getStoredList = () => {
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredReadList = (id) => {
  const storedList = getStoredList();
  if (storedList.includes(id)) {
    // console.log(id, "already exist");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);

    toast("This Book is Added to Your Read-List");
  }
};

const getStoredWishList = () => {
  const storedListStr2 = localStorage.getItem("wish-list");
  if (storedListStr2) {
    const storedList = JSON.parse(storedListStr2);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const storedList = getStoredWishList();
  if (storedList.includes(id)) {
    console.log(id, "wishlist already exist");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("wish-list", storedListStr);
  }
};

export {
  addToStoredReadList,
  getStoredList,
  addToStoredWishList,
  getStoredWishList,
};
