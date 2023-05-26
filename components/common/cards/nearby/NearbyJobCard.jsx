import React from 'react'
import { View, Text,TouchableOpacity,Image } from 'react-native'

import styles from './nearbyjobcard.style'
import { checkImageURL } from '../../../../utils'
const NearbyJobCard = ({job,handleNavigate}) => {
  
 
  return (
    <TouchableOpacity
    style={styles.container}
    onPress={handleNavigate}
    >
    <TouchableOpacity
    style={styles.logoContainer}
    >
     <Image
          source={{
            uri: checkImageURL(job?.employer_logo)
              ? job.employer_logo
              : "https://i.pinimg.com/550x/e1/e1/c5/e1e1c515ca65a12a4b77bbfa2017eee8.jpg",
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />

    </TouchableOpacity>
   
    <View
    style={styles.textContainer}
    >
    <Text
    style={styles.jobName} numberOfLines={1}
    >{job.job_title}</Text>
    <Text style={styles.jobType}>{job.job_employment_type}

    </Text>

    </View>

    </TouchableOpacity>
  )
}

export default NearbyJobCard