import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { BiBarChart } from 'react-icons/bi';
import { CiHeart } from 'react-icons/ci';
import { FiHeart } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';
import { PiShoppingBag } from 'react-icons/pi';
import {v4 as uuidv4} from 'uuid';

export const topNav = [
    {
        id: uuidv4(),
        name: 'О магазине',
        path: 'about-store'
    },
    {
        id: uuidv4(),
        name: 'Доставка и оплата',
        path: 'delivery-i-payment'
    },
    {
        id: uuidv4(),
        name: 'Политика безопасности',
        path: 'political-security'
    },
    {
        id: uuidv4(),
        name: 'Условия соглашения',
        path: 'terms-of-agreement'
    },
    
    {
        id: uuidv4(),
        name: 'Публичная оферта',
        path: 'public-offer'
    },
    {
        id: uuidv4(),
        name: 'Наши гарантии',
        path: 'our-guarantees'
    },
]


export const categorySection = [
    {
        id: uuidv4(),
        name: 'мальчики',
        path: 'boys'
    },
    {
        id: uuidv4(),
        name: 'женщины',
        path: 'women'
    },
    {
        id: uuidv4(),
        name: 'младенцы',
        path: 'adults'
    }
]


export const actions = [
    {
        id: uuidv4(),
        icon: IoSearch
    },
    {
        id: uuidv4(),
        icon: FiHeart,
        count: 0
    },
    {
        id: uuidv4(),
        icon: BiBarChart,
        count: 0
    },
    {
        id: uuidv4(),
        icon: PiShoppingBag,
        count: 0
    }
]