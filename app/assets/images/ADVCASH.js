import React from 'react'
import Svg, {Circle, G, Path, Polygon} from 'react-native-svg'
import OldPhone from '../../services/UI/OldPhone/OldPhone'
import {Image} from 'react-native'

function SvgComponent(props) {
    const ifSelectStyle = props.ifSelectStyle || false
    if (OldPhone.isOldPhone()) { // todo svg
        return (
            <Image
                width={66} height={24}
                resizeMode='stretch'
                source={ifSelectStyle ? require('./advWhite.png') : require('./advDark.png')}/>
        )
    }

    return (
        <Svg width={144} height={50} fill="none" viewBox={'0 0 144 20'} {...props}>
            <Path fillRule="evenodd" clipRule="evenodd" fill={props.fill} d="M62.925,15.25c-1.054-1.159-1.593-2.554-1.593-4.209
                c0-1.632,0.538-3.027,1.593-4.185c1.055-1.158,2.423-1.726,4.061-1.726c1.189,0,2.266,0.284,3.231,0.875v1.041
                c-1.01-0.615-2.042-0.922-3.119-0.922c-1.346,0-2.468,0.473-3.388,1.419c-0.897,0.946-1.346,2.128-1.346,3.523
                c0,1.395,0.449,2.577,1.346,3.523c0.92,0.922,2.042,1.395,3.388,1.395c1.256,0,2.356-0.354,3.321-1.064v1.064
                c-0.942,0.662-2.087,0.994-3.455,0.994C65.326,16.976,63.979,16.409,62.925,15.25z M96.587,16.692h-1.01V0.285h1.01v7.092
                c0.965-1.23,2.648-2.246,4.555-2.246c2.714,0,4.15,1.702,4.15,4.705v6.857h-1.009v-6.644c0-1.608-0.471-2.743-1.212-3.24
                c-0.718-0.497-1.391-0.686-2.221-0.686c-0.831,0-1.638,0.26-2.446,0.804c-0.807,0.52-1.413,1.135-1.817,1.821V16.692z M30.64,12.165
                h3.134l-1.56-3.915L30.64,12.165z M26.589,16.692l4.587-11.343h2.11l4.587,11.343h-2.339l-1.055-2.61h-4.526l-1.055,2.61H26.589z
                M41.533,14.614h1.62c2.385,0,3.792-1.321,3.792-3.561c0-2.24-1.406-3.561-3.792-3.561h-1.62V14.614z M39.331,16.693V5.414h4.006
                c1.728,0,3.15,0.532,4.235,1.579s1.636,2.401,1.636,4.06c0,1.66-0.55,3.029-1.636,4.077c-1.085,1.047-2.508,1.563-4.235,1.563
                H39.331z M54.09,16.757L49.595,5.414h2.431l3.119,8.12l3.134-8.12h2.385l-4.495,11.343H54.09z M80.923,13.737
                c-0.875,1.229-2.423,2.247-4.218,2.247c-1.885,0-3.366-0.899-3.366-2.719c0-1.632,1.391-2.719,3.657-2.719
                c1.346,0,2.647,0.449,3.926,1.324V13.737z M77.288,5.13c-1.458,0-2.737,0.378-3.814,1.112v1.087
                c1.145-0.804,2.356-1.206,3.635-1.206c2.423,0,3.814,1.04,3.814,3.216v1.49c-1.279-0.828-2.693-1.23-4.196-1.23
                c-1.279,0-2.333,0.331-3.186,1.017c-0.83,0.662-1.257,1.561-1.257,2.672c0,1.158,0.404,2.057,1.212,2.719
                c0.83,0.638,1.795,0.97,2.917,0.97c1.907,0,3.433-0.71,4.6-2.152v1.868h0.92V9.244C81.933,6.501,80.07,5.13,77.288,5.13z
                M84.237,15.77v-1.158c1.279,0.922,2.76,1.371,4.398,1.371c2.087,0,3.433-0.875,3.433-2.223c0-3.022-7.494-1.569-7.494-5.58
                c0-1.868,1.503-3.05,4.128-3.05c1.57,0,2.849,0.355,3.859,1.041v1.087c-1.189-0.757-2.446-1.135-3.792-1.135
                c-2.086,0-3.164,0.828-3.164,2.057c0,3.182,7.494,1.351,7.494,5.604c0,0.969-0.426,1.75-1.279,2.341
                c-0.83,0.567-1.885,0.851-3.164,0.851C86.862,16.976,85.112,16.432,84.237,15.77z M8.834,7.987l0.284-0.757H5.443H0.586l0.284,0.757
                h4.281H8.834z M19.069,12.154l0.284-0.757h-3.825l-0.726-1.892h3.13l0.284-0.757h-3.705l-0.292-0.76h4.283l0.284-0.757h-4.857
                L13.64,6.477h5.43l0.284-0.757h-6.005l0,0l-1.636-4.259H7.658L6.023,5.72v0v0H0.019l0.284,0.757h5.428h3.669h0L9.618,5.9l0.068-0.18
                l1.422,3.784l0.711,1.892H7.553l0.711-1.892l0,0l0.284-0.757h0H4.86H1.156l0.284,0.757h3.129l-0.727,1.892H0.019l0.284,0.757h3.249
                h3.717h4.834l0.283,0.753h-5.4H3.263H0.586l0.284,0.757h2.101h3.729h5.969l0.286,0.76h-6.54H2.68H1.156l0.284,0.757h0.949
                l-1.454,3.786h3.774l1.422-3.786h7.109l1.422,3.784l3.772,0.002l-1.453-3.786h0.951l0.284-0.757H16.69l-0.292-0.76h2.103
                l0.284-0.757h-2.678l-0.289-0.753H19.069z M20.302,17.742c0.135,0,0.233,0.091,0.262,0.245l0.183-0.067
                c-0.025-0.097-0.082-0.184-0.161-0.245c-0.09-0.07-0.202-0.105-0.316-0.098c-0.114,0.008-0.221,0.057-0.3,0.139
                c-0.089,0.091-0.135,0.207-0.135,0.344c0,0.147,0.043,0.269,0.127,0.363c0.087,0.094,0.2,0.142,0.339,0.142
                c0.214,0,0.373-0.132,0.443-0.344l-0.181-0.067c-0.031,0.164-0.117,0.245-0.262,0.245c-0.161,0-0.272-0.134-0.272-0.327
                C20.03,17.871,20.141,17.742,20.302,17.742z M20.937,17.417c-0.178-0.18-0.397-0.269-0.659-0.269c-0.262,0-0.481,0.089-0.662,0.269
                c-0.178,0.178-0.267,0.397-0.267,0.657c0,0.26,0.09,0.479,0.267,0.659C19.797,18.911,20.016,19,20.278,19
                c0.262,0,0.481-0.089,0.659-0.267c0.181-0.18,0.27-0.399,0.27-0.659C21.207,17.814,21.118,17.595,20.937,17.417z M20.836,18.639c-0.152,0.151-0.337,0.229-0.558,0.229c-0.104,0.002-0.207-0.017-0.303-0.057c-0.096-0.039-0.183-0.098-0.255-0.172
                c-0.151-0.154-0.225-0.341-0.225-0.565s0.074-0.41,0.225-0.564c0.151-0.154,0.337-0.231,0.558-0.231
                c0.221,0,0.407,0.079,0.558,0.231c0.151,0.152,0.225,0.34,0.225,0.564S20.988,18.485,20.836,18.639z"/>
        </Svg>
    )
}

export default SvgComponent