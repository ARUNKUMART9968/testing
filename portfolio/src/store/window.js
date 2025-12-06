import {create} from 'zustand'

const useWindowStore = create(
    immer((set)=>({
    windows : WINDOW_CONFIG,
    nextZIndex:INITIAL_Z_INDEX +1,

    openWindow :(windowKey,data = null) => set((state)=>{
        const win =state.windows[windowKey];
        win.isOpen = true;
        win.zIdex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;

    }),
    closeWindow :(windowKey,data = null) => set((state)=>{
        const win =state.windows[windowKey];
        win.isOpen = false;
        win.zIdex = INITIAL_Z_INDEX;
        win.data = null;

    }),
    focusWindow :(windowKey,data = null) => set((state)=>{
        const win =state.windows[windowKey];
        win.zIdex = state.nextZIndex++;
    }),
    })),
);
export default useWindowStore;

