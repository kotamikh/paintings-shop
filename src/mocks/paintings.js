import Boats from '@/assets/paintings/Лодки.jpg'
import Boats2 from '@/assets/paintings/Лодки_2.jpg'
import Chasovnia from '@/assets/paintings/Часовня.png'
import ChasovniaFrame from '@/assets/paintings/Часовня-frame.png'
import Dissident from '@/assets/paintings/Диссидент.png'
import DissidentFrame from '@/assets/paintings/Диссидент-frame.png'
import Roses from '@/assets/paintings/Крупные_розы.png'
import RosesFrame from '@/assets/paintings/Крупные_розы-frame.png'
import Stones from '@/assets/paintings/Камни.png'
import StonesFrame from '@/assets/paintings/Камни-frame.png'
import Ukok from '@/assets/paintings/Плато_Укок.png'
import UkokFrame from '@/assets/paintings/Плато_Укок-frame.png'
import Ukok2 from '@/assets/paintings/Плато_Укок_2.png'
import Ukok2Frame from '@/assets/paintings/Плато_Укок_2-frame.png'

export const paintingsMocks = [
    {
        id: 0,
        title: 'Лодки на р. Сулак в Дагестане',
        price: '35.000',
        year: '2024',
        stock: 1,
        source: [Boats, Boats2],
        materials: 'Холст на картоне. Масло.',
        width: 60,
        height: 40
    },
    {
        id: 1,
        title: 'Часовня в Карелии',
        price: '35.000',
        year: '2023',
        stock: 1,
        source: [Chasovnia, ChasovniaFrame],
        materials: 'Холст на картоне. Масло.',
        width: 60,
        height: 40
    },
    {
        id: 2,
        title: 'Кин-Дза-Дза! Диссидент',
        price: '18.000',
        year: '2023',
        stock: 1,
        source: [Dissident, DissidentFrame],
        materials: 'Холст на картоне. Масло.',
        width: 40,
        height: 30
    },
    {
        id: 3,
        title: 'Крупные розы',
        price: '30.000',
        year: '2023',
        stock: 1,
        source: [Roses, RosesFrame],
        materials: 'Холст на картоне. Масло.',
        width: 50,
        height: 50
    },
    {
        id: 4,
        title: 'Камни',
        price: '30.000',
        year: '2023',
        stock: 1,
        source: [Stones, StonesFrame],
        materials: 'Холст, масло.',
        width: 50,
        height: 40
    },
    {
        id: 5,
        title: 'Плато Укок. Курган',
        price: '25.000',
        year: '2023',
        stock: 1,
        source: [Ukok, UkokFrame],
        materials: 'Холст на картоне. Масло.',
        width: 45,
        height: 35
    },
    {
        id: 6,
        title: 'Плато Укок',
        price: '25.000',
        year: '2023',
        stock: 1,
        source: [Ukok2, Ukok2Frame],
        materials: 'Холст на картоне. Масло.',
        width: 35,
        height: 45
    }
]
