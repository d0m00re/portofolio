import React from 'react';
import Image from 'next/image'

interface IProjectElem {
    title: string;
    description: string;
    technologie: string;
    picture: string;
}

const projects: IProjectElem[] = [{
    "title": "Plateforme de e-commerce",
    "description": "Un site web de commerce électronique permettant aux utilisateurs de parcourir des produits, de les ajouter à leur panier et de passer des commandes.",
    "technologie": "React, Node.js, Express, MongoDB",
    "picture": "/project/ecommerce.png"
}, {
    "title": "Application de blog",
    "description": "Un système de gestion de contenu permettant aux utilisateurs de publier, éditer et commenter des articles.",
    "technologie": "Vue.js, Laravel, MySQL",
    "picture": "/project/blog.png"
}, {
    "title": "Plateforme d'apprentissage en ligne",
    "description": "Un site web éducatif offrant des cours en ligne, des quiz et des certifications.",
    "technologie": "Angular, Django, PostgreSQL",
    "picture": "/project/learning.png"
}, {
    "title": "Réseau social pour professionnels",
    "description": "Un réseau social ciblant les professionnels pour le réseautage, le partage d'expériences et la recherche d'emploi.",
    "technologie": "React Native, Firebase, Node.js",
    "picture": "/project/socialnetwork.png"
}, {
    "title": "Système de réservation d'hôtels",
    "description": "Un portail de réservation permettant aux utilisateurs de rechercher, comparer et réserver des hôtels.",
    "technologie": "Svelte, Flask, SQLite",
    "picture": "/project/hotelbooking.png"
}, {
    "title": "Application de suivi de fitness",
    "description": "Une application web pour le suivi des activités physiques, des régimes alimentaires et des progrès en matière de fitness.",
    "technologie": "Next.js, Express, MongoDB",
    "picture": "/project/fitness.png"
}];

//    <div className="
//relative bg-gray-300 h-64 w-full md:w-96 rounded overflow-hidden shadow-lg">

function ProjectElem(props: IProjectElem) {
    return <div className='w-full p-4 border-2 rounded-sm cursor-pointer'>
        <Image
            src={props.picture}
            width={500}
            height={300}
            alt="Background Image"
            className='rounded-sm'
        />
        <h1 className='font-bold'>{props.title}</h1>

    </div>
}

function Project() {
    return (
        <section>
            <h2 className='text-2xl p-2'>
                Projects : 
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4'>{
                projects.map(elem => <ProjectElem key={elem.picture} {...elem} />)
            }</div>
        </section>
    )
}

export default Project