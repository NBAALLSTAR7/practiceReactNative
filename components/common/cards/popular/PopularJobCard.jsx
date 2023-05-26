import React from 'react'
import { View, Text,TouchableOpacity,Image } from 'react-native'

import styles from './popularjobcard.style'
import { checkImageURL } from '../../../../utils'
const PopularJobCard = ({item,selectedJob,handleCardPress}) => {
  console.log(item);

 
  return (
    <TouchableOpacity
    style={styles.container(selectedJob,item)}
    onPress={()=>handleCardPress}
    >
    <TouchableOpacity
    style={styles.logoContainer(selectedJob,item)}
    >
     <Image
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item.employer_logo
              : "https://i.pinimg.com/550x/e1/e1/c5/e1e1c515ca65a12a4b77bbfa2017eee8.jpg",
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />

    </TouchableOpacity>
    <Text
    style={styles.companyName} numberOfLines={1}
    >
    {item.employer_name}

    </Text>

    <View
    style={styles.infoConatiner}
    >
    <Text
    style={styles.jobName(selectedJob,item)} numberOfLines={1}
    >{item.job_title}</Text>
    <Text style={styles.location}>{item.job_country}

    </Text>

    </View>

    </TouchableOpacity>
  )
}

export default PopularJobCard