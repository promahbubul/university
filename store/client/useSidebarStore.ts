import {create} from 'zustand'


type State = {
  isIconSidebar: boolean
}

type Actions = {
  setIsIconSidebar: (active: boolean) => void
}


const useSidebarStore = create<State & Actions>((set) => ({
    isIconSidebar: false,
    setIsIconSidebar: (data) => set({isIconSidebar: data})
}))


export default useSidebarStore