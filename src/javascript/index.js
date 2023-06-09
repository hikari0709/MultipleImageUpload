import '../scss/style.scss';

const uploadInput = document.getElementById('js-upload-input');
const saveButton = document.getElementById('js-save');
const preview = document.getElementById('js-preview');
let uploadImageIndex = 0;

const actionsAssets = {
  left: {
    hook: 'js-file-moveLeft',
    imgName: 'arrow-left',
    text: '左に移動',
  },
  right: {
    hook: 'js-file-moveRight',
    imgName: 'arrow-right',
    text: '右に移動',
  },
  remove: {
    hook: 'js-file-delete',
    imgName: 'dust',
    text: '削除',
  },
};

uploadInput.addEventListener('change', () => {
  const fileList = getUploadFileList();

  // Chromeでは動くがブラウザの互換性がない
  if (fileList.length === 0) return;

  const previewItems = createPreviewList(fileList);
  const sampleItems = getPreviewList();
  drawingImageList(sampleItems);
  preview.appendChild(previewItems);

  addFileActionEvents();
});

saveButton.addEventListener('click', (event) => {
  event.preventDefault();
  const fileData = getUploadFileList();

  if (fileData.length < 0) {
    alert('保存する画像が登録されていません。');
    return;
  }

  const sendData = new FormData();
  for (let i = 0; i < fileData.length; i++) {
    sendData.append(`image${i}`, fileData[i].name);
  }

  const request = new XMLHttpRequest();
  request.open('GET', 'http://httpbin.org/get', false);
  request.send(sendData);
  request.addEventListener('readystatechange', () => {
    alert('画像の保存が完了しました。');
  });
});

function getPreviewList() {
  const previewList = document.querySelectorAll('#js-preview > li');
  return previewList;
}

function getUploadFileList() {
  const files = uploadInput.files;
  return files;
}

function createPreviewList(fileData) {
  let fragment = document.createDocumentFragment();

  for (let i = 0; i < fileData.length; i++) {
    const listItemDom = new createImageItemNode(fileData[i]);
    fragment.append(listItemDom);
    updateUploadImageIndex();
  }
  return fragment;
}

function createFileActionsNode() {
  const div = document.createElement('div');
  const list = document.createElement('ul');
  const closeButton = document.createElement('img');

  closeButton.width = '25';
  closeButton.height = '25';
  closeButton.classList.add('fileActions-close', 'js-fileActions-close');
  closeButton.src = 'images/icon/close.png';

  let actionItems = {};

  for (const property in actionsAssets) {
    actionItems[property] = createFileActionsListItemNode(
      actionsAssets[property].hook,
      actionsAssets[property].imgName,
      actionsAssets[property].text
    );

    list.appendChild(actionItems[property]);
  }

  list.classList.add('fileActions-list');

  div.appendChild(closeButton);
  div.appendChild(list);
  div.classList.add('fileActions', 'js-fileActions', 'is-hide');
  return div;
}

function createFileActionsListItemNode(jsHook, iconName, text) {
  const li = document.createElement('li');
  const img = document.createElement('img');
  const p = document.createElement('p');

  img.classList.add('fileActions-item-icon');
  img.src = `images/icon/${iconName}.png`;
  img.width = '15';
  img.height = '15';

  li.classList.add('fileActions-item', `${jsHook}`);

  p.innerText = text;

  li.appendChild(img);
  li.appendChild(p);

  return li;
}

function createImageItemNode(fileData) {
  const listItem = document.createElement('li');
  const thumbnail = document.createElement('img');
  const button = document.createElement('button');
  const gearIcon = document.createElement('img');
  const actions = createFileActionsNode();
  const index = uploadImageIndex;

  const fileReader = new FileReader();
  fileReader.readAsDataURL(fileData);
  fileReader.onload = () => {
    thumbnail.src = fileReader.result;
  };

  thumbnail.alt = `アップロード画像${index}`;
  thumbnail.width = '150';
  thumbnail.height = '150';

  button.type = 'button';
  button.classList.add('image-settings', 'js-image-settings');

  gearIcon.src = 'images/icon/gear.png';
  gearIcon.alt = '設定アイコン';
  gearIcon.width = '30';
  gearIcon.height = '30';
  gearIcon.classList.add('icon-gear');

  button.appendChild(gearIcon);
  listItem.dataset.index = index;
  listItem.classList.add('images-item');
  listItem.appendChild(thumbnail);
  listItem.appendChild(button);
  listItem.appendChild(actions);

  return listItem;
}

function addFileActionEvents() {
  // fileに対するアクションを実施するためのフックとなるelementの取得
  const fileMoveRight = document.querySelectorAll('.js-file-moveRight');
  const fileMoveLeft = document.querySelectorAll('.js-file-moveLeft');
  const fileDelete = document.querySelectorAll('.js-file-delete');
  const fileActionClose = document.querySelectorAll('.js-fileActions-close');
  const settings = document.querySelectorAll('.js-image-settings');

  // ファイルアクションリストの表示
  settings.forEach((element) => {
    element.addEventListener('click', (event) => {
      const clickedButton = event.currentTarget;
      const target = clickedButton.nextElementSibling;
      target.classList.remove('is-hide');
    });
  });

  // 画像右移動
  fileMoveRight.forEach((element) => {
    element.addEventListener('click', (event) => {
      event.stopImmediatePropagation();
      const clickedButton = event.currentTarget;
      handleImageMove(clickedButton, 'right');
    });
  });

  // 画像左移動
  fileMoveLeft.forEach((element) => {
    element.addEventListener('click', (event) => {
      event.stopImmediatePropagation();
      const clickedButton = event.currentTarget;
      handleImageMove(clickedButton, 'left');
    });
  });

  // 画像削除
  fileDelete.forEach((element) => {
    element.addEventListener('click', (event) => {
      event.stopImmediatePropagation();
      const clickedButton = event.currentTarget;
      const removeTarget = clickedButton.closest('.images-item');
      removeTarget.remove();
      const listItem = getPreviewList();
      updateUploadImageIndex('remove');

      for (let i = 0; i < listItem.length; i++) {
        listItem[i].dataset.index = i;
      }
    });
  });

  // アクションリストの非表示
  fileActionClose.forEach((element) => {
    element.addEventListener('click', (event) => {
      event.stopImmediatePropagation();
      const clickedButton = event.currentTarget;
      hideFileActionList(clickedButton);
    });
  });
}

function handleImageMove(clickedButton, movement) {
  const imageItem = clickedButton.closest('.images-item');
  const [clickedObjectIndex, targetObjectIndex] = getObjectIndex(imageItem, movement);

  // 入れ替え対象のitemがあるか確認
  const listItems = getPreviewList();
  if (!listItems[targetObjectIndex]) {
    alert('入れ替え対象の画像が見つかりません');
    hideFileActionList(clickedButton);
    return;
  }

  hideFileActionList(clickedButton);

  // 入れ替えた後の配列を返す
  const replacedListItem = replaceImageNextTo(listItems, clickedObjectIndex, targetObjectIndex);

  // 入れ替えた後の要素を再描画
  drawingImageList(replacedListItem);
}

// 画像の位置を入れ替える
function replaceImageNextTo(listItems, sourceIndex, targetIndex) {
  const array = Array.from(listItems);
  [array[targetIndex], array[sourceIndex]] = [array[sourceIndex], array[targetIndex]];

  // data-indexの付け替え
  [array[targetIndex].dataset.index, array[sourceIndex].dataset.index] = [targetIndex, sourceIndex];
  return array;
}

// 画像入れ替え後の再描画処理
function drawingImageList(array) {
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < array.length; i++) {
    const listItemDom = array[i];
    fragment.append(listItemDom);
  }
  preview.innerHTML = '';
  preview.appendChild(fragment);
}

// 画像に対する処理のリストを非表示にする
function hideFileActionList(clickedButton) {
  const target = clickedButton.closest('.js-fileActions');
  target.classList.add('is-hide');
}

// 画像入れ替えの際に必要な要素のindex番号を返す
function getObjectIndex(item, movement) {
  const sourceObjectIndex = Number(item.dataset.index);
  let targetObjectIndex = 0;

  if (movement === 'right') {
    targetObjectIndex = sourceObjectIndex + 1;
  } else {
    targetObjectIndex = sourceObjectIndex - 1;
  }

  return [sourceObjectIndex, targetObjectIndex];
}

function updateUploadImageIndex(action) {
  if (action === 'remove') {
    uploadImageIndex = uploadImageIndex - 1;
  } else {
    uploadImageIndex = uploadImageIndex + 1;
  }
}
