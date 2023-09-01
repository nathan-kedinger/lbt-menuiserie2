export class ImageApiClass {
  constructor() {
    this.baseEndpoint = import.meta.env.VITE_BASE_URL
  }

  /**
   *
   * @param category
   * @returns {Promise<any>}
   */
  async getJsonDataFromApi(category) {
    try {
      const response = await fetch(`${this.baseEndpoint}${category}`)
      if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.statusText} ${this.baseEndpoint}${category}`
        )
      }
      return await response.json()
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  /**
   *
   * @param category
   * @returns {Promise<string>}
   */
  async transformJsonInArray(category) {
    try {
      const data = await this.getJsonDataFromApi(category)
      return JSON.stringify(data)
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  /**
   *
   * @param category
   * @returns {Promise<*>}
   */
  async getImages(category) {
    try {
      const data = await this.transformJsonInArray(category)
      const parsedData = JSON.parse(data)
      return parsedData['hydra:member'].map((img, index) => {
        let id = index + 1
        return {
          id: id,
          src: import.meta.env.VITE_BASE_URL + 'images/' + img.illustration,
          name: img.name,
          alt: img.name,
          description: img.description
        }
      })
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
