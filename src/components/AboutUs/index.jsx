import * as React from 'react';

/*MUI Image List */
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function AbuotUs() {

    return (<>
        <div className="card" style={{
            height: 683, width: 416, background: "white",
            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 0
        }}>
            <h1>關於我們</h1>
            <div style={{ display: "flex", flexDirection: "column", margin: 0 }}>
                <p style={{ margin: 0 }}>也許有一天記憶會消失</p>
                <p style={{ margin: 0 }}>但某些夥伴永遠留在我們的生命中裡</p>
                <p style={{ margin: 0 }}>願能助你走得更遠</p>
            </div>
            <TitlebarBelowImageList />
        </div>



    </>)
}

function TitlebarBelowImageList() {
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            author: '@bkristastucchio',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
            author: '@rollelflex_graphy726',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
            author: '@helloimnik',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            author: '@nolanissac',
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            author: '@hjrc33',
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
            author: '@arwinneil',
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
            author: '@tjdragotta',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
            author: '@katie_wasserman',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
            author: '@silverdalex',
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
            author: '@shelleypauls',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
            author: '@peterlaster',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
            author: '@southside_customs',
        },
    ];

    return (
        <ImageList sx={{
            width: 370, height: 450, flexWrap: "nowrap", transform: "translateZ(0)",
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
            "&::-webkit-scrollbar": { display: "none" }

        }}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={<span>by: {item.author}</span>}
                        position="below"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}