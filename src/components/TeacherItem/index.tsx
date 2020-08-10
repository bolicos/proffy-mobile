import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import styles from './styles';


interface TeacherItemProps {
    name: string;
    avatar: string;
    subject: string;
    bio: string;
    price: string;
    whatsapp: string;
    favorite: string;
}

const TeacherItem: React.FC<TeacherItemProps> = ({
    name, avatar, subject, bio, price, whatsapp, favorite
}) => {
    const [isFavorited, setIsFavorited] = useState(favorite);
    function handleLinkToWhatsApp(): void {
        Linking.openURL(`whatsapp://send?phone=${whatsapp}&text=Hello`)
    }

    function handleToggleFavorite() {
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: avatar }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.subject}>{subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}>{bio}</Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora  {'   '}
                    <Text style={styles.priceValue}>R$ {price}</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton
                        onPress={handleToggleFavorite}
                        style={[
                            styles.favoriteButton,
                            isFavorited ? styles.favorited : {}
                        ]}
                    >
                        { isFavorited
                            ? <Image source={unfavoriteIcon} />
                            : <Image source={heartOutlineIcon} />
                        }
                    </RectButton>

                    <RectButton onPress={handleLinkToWhatsApp} style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;