// React
import { FunctionComponent } from 'react';
// Types
import { AvatarProps } from '@/interfaces/index';

const Avatar: FunctionComponent<any> = (props: AvatarProps) => {
  return (
    <div className="w-10 h-10 relative mb-4">
      <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
        <span className="hidden group-hover:table-cell text-white font-bold align-middle">Avatar</span>
        <img src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" alt="lovely avatar" loading="lazy" className="object-cover object-center w-full h-full visible group-hover:hidden" />
      </div>
    </div>
  )
}

export default Avatar
