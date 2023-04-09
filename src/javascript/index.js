import '../scss/style.scss';

const settingButton = document.querySelectorAll('.js-image-settings');

// const uploadButton = document.getElementById('js-upload');
const uploadInput = document.getElementById('js-upload-input');
const saveButton = document.getElementById('js-save');
const preview = document.getElementById('js-preview');
let firstTime = true;

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
    console.log(sampleItems);
    for (let i = 0; i < sampleItems.length; i++) {
      const listItemDom = sampleItems[i];
      fragment.append(listItemDom);
    }
    preview.appendChild(fragment);
    preview.appendChild(previewItems);
  }
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
  const icon = document.createElement('img');
  const iconText = document.createElement('p');

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

  icon.src = 'images/icon/gear.svg';
  icon.alt = '設定アイコン';
  icon.width = '20';
  icon.height = '20';
  icon.classList.add('image-settings-icon');

  iconText.textContent = '設定';

  button.appendChild(icon);
  button.appendChild(iconText);
  listItem.appendChild(thumbnail);
  listItem.appendChild(button);

  return listItem;
}
