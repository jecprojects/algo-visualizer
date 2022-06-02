import React from "react";
import { useSelector } from "react-redux";
// DATA
import { relatedLinks } from "../../core/relatedLinks";
import { youtubeVideos } from "../../core/youtubeVideos";
// ICONS
import { FcGoogle, FcStart } from 'react-icons/fc';
// STYLES
import './style.css';


const RightBar = () => {

    const algorithm = useSelector(state => state.algorithm); // Getting algorithm name from Store state

    console.log(relatedLinks.bubbleSort)

    const renderRelatedLink = () => {
        switch(algorithm.algoName){
            case 'Bubble Sort':
                return (relatedLinks.bubbleSort.map( d => {
                    return  <a href={d.link} target='_blank'>{d.name}</a>
                }))

            case 'Insertion Sort':
                return (relatedLinks.insertionSort.map( d => {
                    return  <a href={d.link} target='_blank'>{d.name}</a>
                }))

            case 'Selection Sort':
                return (relatedLinks.selectionSort.map( d => {
                    return  <a href={d.link} target='_blank'>{d.name}</a>
                }))
        }
    }

    const renderYoutubeLink = () => {
        switch(algorithm.algoName){
            case 'Bubble Sort':
                return (youtubeVideos.bubbleSort.map( d => {
                    return  <a href={d.link} target='_blank'>{d.name}</a>
                }))

            case 'Insertion Sort':
                return (youtubeVideos.insertionSort.map( d => {
                    return  <a href={d.link} target='_blank'>{d.name}</a>
                }))

            case 'Selection Sort':
                return (youtubeVideos.selectionSort.map( d => {
                    return  <a href={d.link} target='_blank'>{d.name}</a>
                }))
        }
    }

    return(
        <div className="right-sidebar-main-div">
            <div className="link-heading-div">
                <span><FcGoogle/></span>
                <h2>Related Links</h2>
            </div>

            <div className="related-links">
                { algorithm.algoName && renderRelatedLink() }
            </div>

            <div className="link-heading-div secondary-link">
                <span><FcStart/></span>
                <h2>Youtube Videos</h2>
            </div>

            <div className="related-links">
                { algorithm.algoName && renderYoutubeLink() }
            </div>
        </div>
    );
}

export default RightBar;