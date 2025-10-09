#!/bin/sh
set -e

# Führe Migrationen durch
echo "⏳ Führe Doctrine-Migrationen aus ..."
php /var/www/symfony/bin/console doctrine:migrations:migrate --no-interaction --allow-no-migration

php /var/www/symfony/bin/console cache:clear --no-warmup

# Danach normal starten (z. B. Unit oder PHP-FPM)
exec "$@"