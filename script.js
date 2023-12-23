// Navbar

const navbar = document.getElementById('navbar');
let prevScrollPos = window.scrollY;

window.onscroll = function() {
  const currentScrollPos = window.scrollY;
  
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = '0';
    navbar.style.backgroundColor = 'rgba(237, 99, 7, 0.9)';
  } else {
    navbar.style.top = `-${navbar.offsetHeight}px`;
    navbar.style.backgroundColor = 'transparent';
  }

  prevScrollPos = currentScrollPos;
};


document.addEventListener("scroll", function() {
  const scrollPosition = window.scrollY;
  const parallaxElement = document.getElementById("parallax");

  parallaxElement.style.backgroundPosition = `50% ${scrollPosition * 0.2}px`;
});



const newData = [
  {
    id: 279,
    slug: "balanced-scorecard-pengertian-manfaat-dan-perspektif",
    title: "Balanced Scorecard: Pengertian, Manfaat dan Perspektif",
    published_at: "2023-07-14 12:00:00",
    deleted_at: null,
    created_at: "2023-07-11 17:30:17",
    updated_at: "2023-07-11 17:30:17",
    small_image: [
      {
        id: 5819,
        mime: "image/jpeg",
        file_name: "shutterstock_1771500266-(1).jpg",
        url:
          "https://suitmedia.static-assets.id/storage/files/5819/conversions/shutterstock_1771500266-(1)-small.jpg",
      },
    ],
    medium_image: [
      {
        id: 5819,
        mime: "image/jpeg",
        file_name: "shutterstock_1771500266-(1).jpg",
        url:
          "https://suitmedia.static-assets.id/storage/files/5819/conversions/shutterstock_1771500266-(1)-medium.jpg",
      },
    ],
  },
  {
    id: 278,
    slug: "system-design-pengertian-prinsip-dan-jenis",
    title: "System Design: Pengertian, Prinsip, dan Jenis",
    published_at: "2023-07-12 12:00:00",
    deleted_at: null,
    created_at: "2023-07-11 16:19:12",
    updated_at: "2023-07-11 16:19:12",
    small_image: [
      {
        id: 5816,
        mime: "image/jpeg",
        file_name: "Shutterstock_2188256057.jpg",
        url:
          "https://suitmedia.static-assets.id/storage/files/5816/conversions/Shutterstock_2188256057-small.jpg",
      },
    ],
    medium_image: [
      {
        id: 5816,
        mime: "image/jpeg",
        file_name: "Shutterstock_2188256057.jpg",
        url:
          "https://suitmedia.static-assets.id/storage/files/5816/conversions/Shutterstock_2188256057-medium.jpg",
      },
    ],
  },
  {
    id: 277,
    slug: "devops-arti-manfaat-metode-dan-contoh",
    title: "DevOps: Arti, Manfaat, Metode, dan Contoh",
    published_at: "2023-06-28 12:00:00",
    deleted_at: null,
    created_at: "2023-06-27 11:26:39",
    updated_at: "2023-07-05 09:30:53",
    small_image: [
      {
        id: 5735,
        mime: "image/jpeg",
        file_name: "Shutterstock_2108032016.jpg",
        url:
          "https://suitmedia.static-assets.id/storage/files/5735/conversions/Shutterstock_2108032016-small.jpg",
      },
    ],
    medium_image: [
      {
        id: 5735,
        mime: "image/jpeg",
        file_name: "Shutterstock_2108032016.jpg",
        url:
          "https://suitmedia.static-assets.id/storage/files/5735/conversions/Shutterstock_2108032016-medium.jpg",
      },
    ],
  },
  {
    id: 276,
    slug: "brand-personality-arti-peran-dan-cara-menentukan",
    title: "Brand Personality: Arti, Peran, dan Cara Menentukan",
    published_at: "2023-06-27 12:00:00",
    deleted_at: null,
    created_at: "2023-06-27 11:16:19",
    updated_at: "2023-06-27 13:52:50",
    small_image: [
      {
        id: 5732,
        mime: "image/jpeg",
        file_name: "Shutterstock_1604882608.jpg",
        url:
          "https://suitmedia.static-assets.id/storage/files/5732/conversions/Shutterstock_1604882608-small.jpg",
      },
    ],
    medium_image: [
      {
        id: 5732,
        mime: "image/jpeg",
        file_name: "Shutterstock_1604882608.jpg",
        url:
          "https://suitmedia.static-assets.id/storage/files/5732/conversions/Shutterstock_1604882608-medium.jpg",
      },
    ],
  },
  {
    id: 275,
    slug: "5-cara-mengatasi-dan-mencegah-malware",
    title: "5 Cara Mengatasi dan Mencegah Malware",
    published_at: "2023-06-20 12:00:00",
    deleted_at: null,
    created_at: "2023-06-19 21:00:49",
    updated_at: "2023-06-20 15:20:48",
    small_image: [
      {
        id: 5691,
        mime: "image/jpeg",
        file_name: "shutterstock_1378498490.jpg",
        url:
          "https://suitmedia.static-assets.id/storage/files/5691/conversions/shutterstock_1378498490-small.jpg",
      },
    ],
    medium_image: [
      {
        id: 5691,
        mime: "image/jpeg",
        file_name: "shutterstock_1378498490.jpg",
        url:
          "https://suitmedia.static-assets.id/storage/files/5691/conversions/shutterstock_1378498490-medium.jpg",
      },
    ],
  },
  {
    id: 273,
    slug: "peran-user-flow-pada-ux-design",
    title: "Peran User Flow pada UX Design",
    published_at: "2023-06-09 12:00:00",
    deleted_at: null,
    created_at: "2023-06-03 12:58:28",
    updated_at: "2023-06-09 17:41:10",
    small_image: [
      {
        id: 5524,
        mime: "image/jpeg",
        file_name: "Shutterstock_245428414.jpg",
        url:
          "https://suitmedia.static-assets.id/storage/files/5524/conversions/Shutterstock_245428414-small.jpg",
      },
    ],
    medium_image: [
      {
        id: 5524,
        mime: "image/jpeg",
        file_name: "Shutterstock_245428414.jpg",
        url:
          "https://suitmedia.static-assets.id/storage/files/5524/conversions/Shutterstock_245428414-medium.jpg",
      },
    ],
  },
  {
    id: 272,
    slug: "kupas-tuntas-landing-page-pengertian-jenis-dan-manfaat",
    title: "Kupas Tuntas Landing Page: Pengertian, Jenis, dan Manfaat",
    published_at: "2023-06-08 12:00:00",
    deleted_at: null,
    created_at: "2023-06-03 12:32:12",
    updated_at: "2023-06-09 17:39:07",
    small_image: [
      {
        id: 5522,
        mime: "image/jpeg",
        file_name: "shutterstock_698133355.jpg",
        url:
          "https://suitmedia.static-assets.id/storage/files/5522/conversions/shutterstock_698133355-small.jpg",
      },
    ],
    medium_image: [
      {
        id: 5522,
        mime: "image/jpeg",
        file_name: "shutterstock_698133355.jpg",
        url:
          "https://suitmedia.static-assets.id/storage/files/5522/conversions/shutterstock_698133355-medium.jpg",
      },
    ],
  },
  {
    id: 274,
    slug: "kolaborasi-program-kampus-merdeka-x-suitmedia-1",
    title: "Kolaborasi Program Kampus Merdeka X Suitmedia",
    published_at: "2023-06-07 12:00:00",
    deleted_at: null,
    created_at: "2023-06-05 21:59:12",
    updated_at: "2023-06-05 21:59:40",
    small_image: [
      {
        id: 5543,
        mime: "image/jpeg",
        file_name: "KM5_Website_02.jpg",
        url:
          "https://suitmedia.static-assets.id/storage/files/5543/conversions/KM5_Website_02-small.jpg",
      },
    ],
    medium_image: [
      {
        id: 5543,
        mime: "image/jpeg",
        file_name: "KM5_Website_02.jpg",
        url:
          "https://suitmedia.static-assets.id/storage/files/5543/conversions/KM5_Website_02-medium.jpg",
      },
    ],
  },
  {
    id: 271,
    slug: "5-contoh-company-profile-untuk-branding-yang-menarik",
    title: "5 Contoh Company Profile untuk Branding yang Menarik",
    published_at: "2023-06-05 12:00:00",
    deleted_at: null,
    created_at: "2023-06-02 19:41:31",
    updated_at: "2023-06-07 15:27:39",
    small_image: [
      {
        id: 5518,
        mime: "image/jpeg",
        file_name: "shutterstock_296990378.jpg",
        url:
          "https://suitmedia.static-assets.id/storage/files/5518/conversions/shutterstock_296990378-small.jpg",
      },
    ],
    medium_image: [
      {
        id: 5518,
        mime: "image/jpeg",
        file_name: "shutterstock_296990378.jpg",
        url:
          "https://suitmedia.static-assets.id/storage/files/5518/conversions/shutterstock_296990378-medium.jpg",
      },
    ],
  },
  {
    id: 270,
    slug: "arti-dan-penerapan-integrated-marketing-communication",
    title: "Arti dan Penerapan Integrated Marketing Communication",
    published_at: "2023-06-01 12:00:00",
    deleted_at: null,
    created_at: "2023-05-31 09:19:15",
    updated_at: "2023-06-07 15:25:34",
    small_image: [
      {
        id: 5495,
        mime: "image/jpeg",
        file_name: "Shutterstock_677102113.jpg",
        url:
          "https://suitmedia.static-assets.id/storage/files/5495/conversions/Shutterstock_677102113-small.jpg",
      },
    ],
    medium_image: [
      {
        id: 5495,
        mime: "image/jpeg",
        file_name: "Shutterstock_677102113.jpg",
        url:
          "https://suitmedia.static-assets.id/storage/files/5495/conversions/Shutterstock_677102113-medium.jpg",
      },
    ],
  },
];


const App = {
  apiUrl: "https://suitmedia-backend.suitdev.com/api/ideas",
  currentPage: 1,
  itemsPerPage: 10,
  sortOption: "-published_at",
  postListElement: document.getElementById("post-list"),
  paginationElement: document.getElementById("pagination"),
};

async function fetchData() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Fetched new data:", newData);
    displayData(newData);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

function displayData(data) {
  if (Array.isArray(data)) {
    data.forEach((post) => {
      const postCard = createPostCardHTML(post);
      App.postListElement.appendChild(postCard);
    });

    const totalPages = Math.ceil(data.length / App.itemsPerPage);
    updatePagination(totalPages);
  } else {
    console.error("Invalid data structure: 'data' should be an array.");
  }
}

function createPostCardHTML(post) {
  const postCard = document.createElement("div");
  postCard.className = "post-card";

  const thumbnailUrl = post.small_image ? post.small_image[0]?.url || "" : "";
  const description = post.slug || "";
  const imageElement = document.createElement("img");
  imageElement.src = thumbnailUrl;
  imageElement.alt = post.title || "";
  imageElement.className = "post-thumbnail";


  const dateElement = document.createElement("div");
  dateElement.className = "post-date";

  const date = new Date(post.published_at || "");
  dateElement.textContent = date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });


  const titleElement = document.createElement("div");
  titleElement.textContent = post.title || "";
  titleElement.className = "post-title";


  const descriptionElement = document.createElement("div");
  descriptionElement.innerHTML = `<strong>${description}</strong>`;


  postCard.appendChild(imageElement);
  postCard.appendChild(dateElement); 
  postCard.appendChild(titleElement);
  postCard.appendChild(descriptionElement);

  return postCard;
}


function clearPostList() {
  App.postListElement.innerHTML = "";
}

function updatePagination(totalPages) {
  App.paginationElement.innerHTML = "";
  for (let i = 1; i <= Math.min(totalPages, 5); i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.addEventListener("click", () => updatePage(i));
    App.paginationElement.appendChild(pageButton);
  }
}

function updatePage(newPage) {
  App.currentPage = newPage;
  clearPostList();
  const startIndex = (newPage - 1) * App.itemsPerPage;
  const endIndex = startIndex + App.itemsPerPage;
  const dataSlice = newData.slice(startIndex, endIndex);
  displayData(dataSlice);
}

function updateItemsPerPage(newItemsPerPage) {
  App.itemsPerPage = newItemsPerPage;
  updatePage(1);
}

function updateSortOption(newSortOption) {
  App.sortOption = newSortOption;
  newData.sort((a, b) => {
    if (newSortOption === "-published_at") {
      return new Date(b.published_at) - new Date(a.published_at);
    } else if (newSortOption === "published_at") {
      return new Date(a.published_at) - new Date(b.published_at);
    } else {
      return 0;
    }
  });
  updatePage(1);
}

fetchData();

$(document).ready(function () {
  $(window).scroll(function () {
    toggleNavbarClass();
    updateBannerPosition();
  });
});
