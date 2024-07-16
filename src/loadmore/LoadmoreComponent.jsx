    import React, { useEffect } from 'react'
    import '../loadmore/LoadmoreComponent.css'
    import { Card, Button } from 'react-bootstrap'
    import { useState } from 'react'
    const LoadmoreComponent = () => {
        const content = `Microsoft Corporation is an American multinational corporation and technology company headquartered in Redmond, Washington.[2] Its best-known software products are the Windows line of operating systems, the Microsoft 365 suite of productivity applications, the Azure cloud computing platform and the Edge web browser. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface lineup of touchscreen personal computers. Microsoft ranked No. 14 in the 2022 Fortune 500 rankings of the largest United States corporations by total revenue;[3] and it was the world's largest software maker by revenue in 2022 according to Forbes Global 2000. It is considered one of the Big Five American information technology companies, alongside Alphabet (parent company of Google), Amazon, Apple, and Meta (parent company of Facebook).`
        const [text, setText] = useState(``);
        const [isReadMore, setIsReadMore] = useState(false);
        const [showReadMore, setShowReadMore] = useState(true);

        const readLess = () => {
            const words = content.split(' ');
            if (words.length > 30) {
                const shortenedText = words.slice(0, 30).join(' ') + '...';
                setText(shortenedText);
            } else {
                setText(content);
                setShowReadMore(false);
            }
        };
        useEffect(() => {
            readLess();
        }, []);
        
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
            if (isReadMore) {
                readLess();
            } else {
                setText(content);
            }
        };

        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body >
                    <Card.Text>
                        {text}
                    </Card.Text>
                    {showReadMore && (
                        <Button variant="dark" onClick={toggleReadMore}>
                            {isReadMore ? 'Read Less' : 'Read More'}
                        </Button>
                    )}
                </Card.Body>
            </Card>

        );
    }

    export default LoadmoreComponent
