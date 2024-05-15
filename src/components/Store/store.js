import { create } from "zustand";

export const useStore = create((set, get) => ({
    datas: [],
    // addData: (newId, newTitle) => {
    //     const props = {id: newId, title: newTitle}
    //     set({data: [ ...get().data , props]})
    // }
    addData: (newId, newTitle) => {
        const props = {id: newId, title: newTitle}
        let toggle = true
        

        if(!!get().datas) get().datas.map(
            data => newId === data.id ? 
            toggle = false : {}
        )
        if(toggle) 
        set({datas: [ ...get().datas , props]})
        else{
            const index = get().datas.findIndex(data => data.id === newId);
            get().datas.splice(index, 1)
            set({datas: [ ...[], ...get().datas]})
        }
    }
}))