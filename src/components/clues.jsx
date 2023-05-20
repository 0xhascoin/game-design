import React from 'react'

const Clues = () => {
  return (
    <div className='bg-gradient-to-r from-[#7f5539] to-[#432818] flex place-items-center py-14'>
        <div className="grid grid-cols-3 gap-3 text-center">
            <div className='p-4'>
                <h1 className="text-white">
                    Clue 1.
                </h1>
                <p>Lorem, ipsum dolor.</p>
                <img className='rounded mt-4' src="https://media.discordapp.net/attachments/1083613556215394394/1105425907411320942/Hascoin_giant_monster_pink_cyber_fox_giant_pixar_theme_high_res_0519fdce-6240-4230-8b20-39514d3f8286.png?width=649&height=649" alt="" />
            </div>
            <div className=' p-4'>
                <h1 className="text-white">
                    Clue 2.
                </h1>
                <p>Lorem, ipsum dolor.</p>
                <img className='rounded mt-4' src="https://cdn.midjourney.com/b3f1961b-3e4a-4cfa-81ea-2e377e1d6b67/grid_0.png" alt="" />
            </div>
            <div className=' p-4'>
                <h1 className="text-white">
                    Clue 3.
                </h1>
                <p>Lorem, ipsum dolor.</p>
                <img className='rounded mt-4' src="https://media.discordapp.net/attachments/1083613556215394394/1109505849409409109/Hascoin_user_interface_design_landing_page_treasure_hunt_6b31063f-15fd-412a-820f-603635f349a0.png?width=649&height=649" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Clues