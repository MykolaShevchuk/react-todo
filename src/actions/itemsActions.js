import http from "../http";
import session from "../utils/session"

export function loadItems() {
  return {
    type: 'ITEMS_LOAD',
    payload: http.get(`users/${session.userId}/items`).catch((err) => console.log('handle error'))
  }
}

export function addItem(title) {
  let body = {title: title};
  return {
    type: 'ITEM_ADD',
    payload: http.post(`users/${session.userId}/items`, body).catch((err) => console.log('handle error'))
  }
}

export function deleteItem(id) {
  return {
    type: 'ITEM_DELETE',
    payload: http.delete(`users/${session.userId}/items`, id).catch((err) => console.log('handle error'))
  }
}

export function changeItemStatus(item) {
  let body = {...item, done: !item.done};
  return {
    type: 'ITEM_CHANGE_STATUS',
    payload: http.put(`users/${session.userId}/items`, body).catch((err) => console.log('handle error'))
  }
}

export function changeItemSection(item, sectionId) {
  let body = {...item, sectionId};
  return {
    type: 'ITEM_CHANGE_SECTION',
    payload: http.put(`users/${session.userId}/items`, body).catch((err) => console.log('handle error'))
  }
}