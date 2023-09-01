import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import GenericGallery from '@/components/Realisations/GenericGallery.vue'

describe('GenericGallery.vue', () => {
  it('renders images correctly', async () => {
    // Mock des données d'images
    const mockGalleryData = [
      { id: 1, src: 'image1.jpg', alt: 'Image 1' },
      { id: 2, src: 'image2.jpg', alt: 'Image 2' }
    ]

    // Crée un wrapper pour le composant avec les données simulées
    const wrapper = mount(GenericGallery, {
      props: {
        galleryData: mockGalleryData
      }
    })

    // Attends que le prochain cycle de rendu soit terminé
    await wrapper.vm.$nextTick()

    // Effectue des assertions sur le rendu des images
    const images = wrapper.findAll('.image-class')
    expect(images).toHaveLength(2) // Le nombre attendu d'images
  })

  // Ajoutez d'autres tests ici
})
