import '../scss/style.scss';

const fileActionsDom = `
  <div class="fileActions js-fileActions is-hide">
    <svg
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      xml:space="preserve"
      class="fileActions-close js-fileActions-close"
    >
      <g>
        <polygon
          points="326.253,147.826 256,218.08 185.747,147.826 147.819,185.747 218.072,256 147.819,326.253
        185.747,364.182 256,293.929 326.262,364.182 364.19,326.253 293.928,256 364.19,185.738"
        ></polygon>
        <path
          d="M437.018,74.99C390.76,28.699,326.624-0.008,256,0.009C185.385-0.008,121.24,28.699,74.982,74.99
        C28.699,121.231-0.008,185.385,0,256c-0.008,70.615,28.699,134.76,74.982,181.01C121.24,483.301,185.385,512.009,256,511.991
        c70.624,0.017,134.76-28.69,181.018-74.982C483.301,390.76,512.008,326.615,512,256C512.016,185.385,483.301,121.231,437.018,74.99
        z M405.071,405.071c-38.222,38.181-90.774,61.739-149.071,61.739c-58.289,0-110.849-23.558-149.071-61.739
        C68.747,366.84,45.198,314.281,45.181,256c0.016-58.28,23.566-110.848,61.748-149.071C145.151,68.739,197.711,45.19,256,45.19
        c58.298,0,110.849,23.55,149.071,61.739c38.182,38.223,61.74,90.791,61.748,149.071
        C466.811,314.281,443.253,366.84,405.071,405.071z"
        ></path>
      </g>
    </svg>
    <ul class="fileActions-list">
      <li class="fileActions-itme js-file-moveRight">
        <svg
          version="1.1"
          id="_x32_"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          xml:space="preserve"
          class="fileActions-itme-icon"
        >
          <g>
            <path
              d="M499.436,225.905L295.858,24.536c-16.623-16.438-43.428-16.305-59.866,0.328
  c-16.438,16.613-16.294,43.418,0.329,59.856l130.356,128.958H42.329C18.956,213.679,0,232.624,0,255.997
  c0,23.383,18.956,42.328,42.329,42.328h324.347L236.321,427.273c-16.623,16.438-16.767,43.254-0.329,59.867
  c16.438,16.622,43.243,16.766,59.866,0.328l203.578-201.368c8.044-7.963,12.564-18.792,12.564-30.102
  C512,244.685,507.479,233.866,499.436,225.905z"
            ></path>
          </g>
        </svg>
        右に移動
      </li>
      <li class="fileActions-itme js-file-moveLeft">
        <svg
          version="1.1"
          id="_x32_"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          xml:space="preserve"
          class="fileActions-itme-icon"
        >
          <g>
            <path
              d="M469.672,213.675H145.324L275.68,84.727c16.623-16.438,16.767-43.253,0.329-59.866
  c-16.438-16.624-43.243-16.767-59.867-0.328L12.566,225.901C4.52,233.863,0,244.691,0,256.003c0,11.312,4.52,22.13,12.566,30.093
  l203.576,201.368c16.624,16.438,43.428,16.304,59.867-0.33c16.438-16.613,16.294-43.417-0.329-59.855L145.324,298.322h324.347
  c23.374,0,42.328-18.945,42.328-42.319C512,232.62,493.045,213.675,469.672,213.675z"
            ></path>
          </g>
        </svg>
        左に移動
      </li>
      <li class="fileActions-itme fileActions-itme-remove js-file-delete">
        <svg
          version="1.1"
          id="_x32_"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          xml:space="preserve"
          class="fileActions-itme-icon"
        >
          <g>
            <path
              d="M77.869,448.93c0,13.312,1.623,25.652,5.275,35.961c4.951,13.636,13.475,23.457,26.299,26.297
  c2.598,0.488,5.277,0.812,8.117,0.812h277.364c0.73,0,1.381,0,1.947-0.082c26.463-1.703,37.258-29.219,37.258-62.988
  l11.121-269.324H66.748L77.869,448.93z M331.529,239.672h52.68v212.262h-52.68V239.672z M229.658,239.672h52.682v212.262h-52.682
  V239.672z M127.789,239.672h52.762v212.262h-52.762V239.672z"
            ></path>
            <path
              d="M368.666,89.289c0.078-2.028,0.242-4.059,0.242-6.09v-5.598c0-42.777-34.822-77.602-77.6-77.602h-70.701
  c-42.778,0-77.6,34.824-77.6,77.602v5.598c0,2.031,0.162,4.062,0.326,6.09H28.721v62.582h454.558V89.289H368.666z M320.205,83.199
  c0,2.113-0.242,4.141-0.648,6.09H192.361c-0.406-1.949-0.65-3.977-0.65-6.09v-5.598c0-15.91,12.986-28.898,28.897-28.898h70.701
  c15.99,0,28.896,12.988,28.896,28.898V83.199z"
            ></path>
          </g>
        </svg>
        削除
      </li>
    </ul>
  </div>
`;

// const uploadButton = document.getElementById('js-upload');
const uploadInput = document.getElementById('js-upload-input');
const saveButton = document.getElementById('js-save');
const preview = document.getElementById('js-preview');
let firstTime = true;

// 同じ処理を書くから後でまとめておく 44行目
const settingButton = document.querySelectorAll('.js-image-settings');
settingButton.forEach((element) => {
  element.addEventListener('click', () => {
    console.log('setting');
  });
});

// uploadButton.addEventListener('click', () => {
//   console.log('upload');
//   uploadInput.click();
// });

// 一度目にアップロードした画像がリセットされずに残っている
// 一度目の状態を保存したままに追加ができるように修正する必要がある

uploadInput.addEventListener('change', () => {
  const fileList = getUploadFileList();
  const previewItems = createPreviewList(fileList);
  if (firstTime) {
    preview.innerHTML = '';
    preview.appendChild(previewItems);
    firstTime = false;
  } else {
    let fragment = document.createDocumentFragment();
    const sampleItems = document.querySelectorAll('#js-preview li');
    for (let i = 0; i < sampleItems.length; i++) {
      const listItemDom = sampleItems[i];
      fragment.append(listItemDom);
    }
    preview.appendChild(fragment);
    preview.appendChild(previewItems);
  }

  const fileActions = document.querySelectorAll('.js-image-settings');
  fileActions.forEach((element) => {
    element.addEventListener('click', (event) => {
      const clickedButton = event.currentTarget;
      const target = clickedButton.nextElementSibling;
      target.classList.remove('is-hide');
    });
  });
});

saveButton.addEventListener('click', () => {
  console.log('save');
});

function getUploadFileList() {
  const files = uploadInput.files;
  // const fileData = new FileReader();
  // fileData.onload = function () {
  //   document.getElementById('js-preview').src = fileData.result;
  // };
  //fileData.readAsDataURL(hoge.files[0]);
  return files;
}

function createPreviewList(fileData) {
  let fragment = document.createDocumentFragment();

  for (let i = 0; i < fileData.length; i++) {
    const listItemDom = createListItem(fileData[i]);
    fragment.append(listItemDom);
  }

  return fragment;
}

function createListItem(fileData) {
  const listItem = document.createElement('li');
  const thumbnail = document.createElement('img');
  const button = document.createElement('button');
  const gearIcon = document.createElement('img');

  const fileReader = new FileReader();
  fileReader.readAsDataURL(fileData);
  fileReader.onload = () => {
    thumbnail.src = fileReader.result;
  };

  thumbnail.alt = 'アップロード画像';
  thumbnail.width = '150';
  thumbnail.height = '150';

  button.type = 'button';
  button.classList.add('image-settings', 'js-image-settings');

  gearIcon.src = 'images/icon/gear.svg';
  gearIcon.alt = '設定アイコン';
  gearIcon.width = '30';
  gearIcon.height = '30';
  gearIcon.classList.add('icon-gear');

  button.appendChild(gearIcon);
  listItem.appendChild(thumbnail);
  listItem.appendChild(button);
  listItem.insertAdjacentHTML('beforeend', fileActionsDom);

  const fileMoveRight = document.querySelectorAll('.js-file-moveRight');
  const fileMoveLeft = document.querySelectorAll('.js-file-moveLeft');
  const fileDelete = document.querySelectorAll('.js-file-delete');

  fileMoveRight.forEach((element) => {
    console.log(element);
    element.addEventListener('click', () => {
      console.log('move right');
    });
  });

  fileMoveLeft.forEach((element) => {
    element.addEventListener('click', () => {
      console.log('move left');
    });
  });

  fileDelete.forEach((element) => {
    element.addEventListener('click', () => {
      console.log('delete');
    });
  });

  return listItem;
}
