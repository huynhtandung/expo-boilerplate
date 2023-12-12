import { Pressable, Text, TextInput, View } from 'react-native'

import { BoldText, Layout } from '@/components'
import { FlashList } from '@shopify/flash-list'
import CreateNoteIcon from 'assets/icons/create-note.svg'
import { useState } from 'react'
import Modal from 'react-native-modal'

const list = Array.from({ length: 200 }, (_, index) => ({
  title: `This is a item ${index + 1}`,
}))

export const StoriesScreen = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <Layout>
        <View
          style={{
            height: 0,
            flexGrow: 1,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 20,
            }}
          >
            <BoldText text="Stories" color="#000" size={24} style={{ lineHeight: 24 }} />
            <CreateNoteIcon width={28} height={28} onPress={() => setIsVisible(true)} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}
          >
            <TextInput
              style={{ flexGrow: 1, width: 0, borderWidth: 1, height: 40, paddingHorizontal: 8 }}
            />
            <Pressable
              style={{
                width: 60,
                borderWidth: 1,
                height: 40,
                justifyContent: 'center',
                borderLeftWidth: 0,
              }}
              onPress={() => setIsVisible(true)}
            >
              <BoldText text="Filter" style={{ textAlign: 'center' }} color="#000" />
            </Pressable>
          </View>
          <FlashList
            data={list}
            renderItem={({ item }) => (
              <Text
                style={{
                  color: '#000',
                  paddingVertical: 16,
                  borderBottomWidth: 1,
                  borderBottomColor: 'gray',
                }}
              >
                {item.title}
              </Text>
            )}
            estimatedItemSize={200}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </Layout>
      <Modal
        isVisible={isVisible}
        coverScreen={true}
        style={{ margin: 0, justifyContent: 'flex-end' }}
        backdropOpacity={0.5}
        swipeDirection="down"
        animationInTiming={500}
        onSwipeComplete={() => setIsVisible(false)}
      >
        <View style={{ height: 200, backgroundColor: '#fff' }}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
    </>
  )
}
