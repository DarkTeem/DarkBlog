import { BaseCommand } from '@adonisjs/core/build/standalone'

export default class TestCommand extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'test:test'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = ''

  public static settings = {
    loadApp: false,
    stayAlive: false,
  }

  public async run() {
    this.logger.info('Hello world!')
  }
}
