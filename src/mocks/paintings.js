import Chasovnia from '@/assets/paintings/Часовня.jpg'
import KinDzaDza from '@/assets/paintings/Диссидент.jpg'
import Roses from '@/assets/paintings/Крупные_розы.jpg'
import Bouquet from '@/assets/paintings/букет.jpeg'
import KinDzaDzaTwo from '@/assets/paintings/кин-дза-дза-2.jpeg'
import Flowers from '@/assets/paintings/цветы.jpeg'

export const paintingsMocks = [
    {
        id: 0,
        title: 'Часовня в Карелии',
        price: 3000,
        year: '2023',
        stock: 1,
        source: Chasovnia,
        materials: 'Холст на картоне. Масло.',
        width: 60,
        height: 40
    },
    {
        id: 1,
        title: 'Кин-Дза-Дза! Диссидент',
        price: 4000,
        year: '2023',
        stock: 1,
        source: KinDzaDza,
        materials: 'Холст на картоне. Масло.',
        width: 40,
        height: 30
    },
    {
        id: 2,
        title: 'Крупные розы',
        price: 5000,
        year: '2023',
        stock: 1,
        source: Roses,
        materials: 'Холст на картоне. Масло.',
        width: 50,
        height: 50
    },
    {
        id: 3,
        title: 'Букет',
        price: 2000,
        year: '2022',
        stock: 0,
        source: Bouquet
    },
    {
        id: 4,
        title: 'Кин-Дза-Дза-2',
        price: 4500,
        year: '2021',
        stock: 0,
        source: KinDzaDzaTwo
    },

    {
        id: 5,
        title: 'Цветы',
        price: 3300,
        year: '2019',
        stock: 0,
        source: Flowers
    }
]
